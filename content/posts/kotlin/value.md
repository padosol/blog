---
title: "코틀린에서 @Value 사용방법"
description: "Kotlin 에서 @Value 사용방법을 알아도보록 하겠습니다."
date: "2025-05-28"
category: "kotlin"
---

프로퍼티에 설정해 놓은 변수 값을 가져올 때 @Value 를 사용합니다.

아래와 같이 Class 의 필드명에 @Value 을 사용하여 값을 세팅할 수 있습니다.
``` java
@Value(${spring.application.name})
String applicationName;
```

반면 코틀린에서 동일하게 사용한다면 동작하지 않게 됩니다.

