---
title: "k6 설치 및 Grafana + InfluxDB 모니터링 구축"
description: "부하테스트 도구인 K6 를 윈도우 환경에서 설치해보고 Grafana + InfluxDB 를 사용하여 대시보드를 구축해보도록 하겠습니다."
date: "2025-07-02"
category: "test"
---

## MacOS

`Homebrew` 를 사용하여 설치한다.

```bash
brew install k6
```


## Windows

`Chocolatey package manager` 를 사용하여 설치한다.

`Cholatey` 관련 링크 [https://chocolatey.org/](https://chocolatey.org/)


```bash
choco install k6
```


설치 후 `CMD` 창에 `k6` 를 입력하게 되면 다음과 같이 `k6` 화면을 볼 수 있다.

```bash
$ k6
```

![](/posts/test/k6-install/k6-start.png)


## 실행

설치 완료 후 아무 폴더에 간단한 JS 파일을 하나 작성한다.

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://[테스트하고자 하는 주소]');
  sleep(1);
}
```

그 후 해당 파일이 위치한 곳에서 아래 명령어를 실행한다.

```bash
$ k6 run script.js
```

다음과 같이 `k6` 가 실행되었고, 결과를 보여주게 된다.

![](/posts/test/k6-install/k6-result.png)

추가적인 사용방법은 `k6 공식 docs` 에서 확인할 수 있다.
[https://grafana.com/docs/k6/latest/using-k6/](https://grafana.com/docs/k6/latest/using-k6/)

## Grafana + InfluxDB 연동 하여 모니터링

k6 를 실행하면 console 로 결과를 볼 수 있지만,
시각적으로 보는게 더욱 효과적이다.

k6 를 모니터링 하기 위해 Grafana 와 InfluxDB 를 사용한다.

도커를 사용해서 구축해 보도록 하겠다.

### docker-compose.yml

```yaml
version: '3.4'

networks:
  k6:
  grafana:

services:
  influxdb:
    image: influxdb:1.8
    networks:
      - k6
      - grafana
    ports:
      - "8086:8086"
    environment:
      - INFLUXDB_DB=k6


  grafana:
    image: grafana/grafana:9.3.8
    networks:
      - grafana
    ports:
      - "3333:3000"
    environment:
      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
      - GF_AUTH_ANONYMOUS_ENABLED=true
      - GF_AUTH_BASIC_ENABLED=false
    volumes:
      - ./grafana:/etc/grafana/provisioning/


  k6:
    image: grafana/k6:latest
    networks:
      - k6
    ports:
      - "6565:6565"
    environment:
      - K6_OUT=influxdb=http://influxdb:8086/k6
    volumes:
      - ./examples:/scripts
```

### 컨테이너 실행

```bash
docker-compose up -d influxdb grafana
```

`influxdb` 와 `grafana` 만 실행해 주었는데, 이는 `k6` 는 실행 후 종료되는 서비스이기 때문이다.

이후 `example` 폴더를 생성하여 아래에 `script.js` 파일을 옮겨주자.


다음으로 `localhost:3333` 으로 접속하여 `Grafana` 대쉬보드로 들어간다.


설정에서 InfluxDB 를 등록해준다.

![](/posts/test/k6-install/influxdb-1.png)

![](/posts/test/k6-install/influxdb-2.png)


다음으로 대시보드를 설정하면 되는데, 직접 만들기 보단 만들어진 걸 사용하면 손쉽게 구성할 수 있다.
저는 `4411` `ID` 를 가진 템플릿을 사용하였습니다. 


### k6 실행

```bash
docker-compose run --rm k6 run /scripts/script.js
```



### 대시보드 확인

![](/posts/test/k6-install/dashboard.png)