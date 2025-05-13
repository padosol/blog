---
title: "RabbitMQ 란?"
description: "RabbitMQ 에 대해서 알아보는 시간을 가지도록 하겠습니다."
date: "2025-05-12"
category: "rabbitmq"
---

## RabbitMQ란?
> AMQP 를 구현하여 서버간 메시지를 전달해주는 오픈 소스 메시지 브로커 소프트웨어 ( 메시지 지향 미들웨어 )

### AMQP ( Advanced Message Queuing Protocol) 란?
> 메시지 지향 미들웨어를 위한 개방형 표준 응용 계층 프로토콜


## RabbitMQ 와 Kafka 메시지 소비 방식의 차이

> RabbitMQ 는 Push 방식으로 브로커가 소비자에게 메시지를 전송하는 방식
> Kafka 는 소비자 쪽에서 Pull 하는 방식


## RabbitMq 구성

![RabbitMQ 구성](/posts/rabbitmq/rabbitmq/configure.png) 

### 1. Producer
- Message 를 전송하는 주체
- Message 는 RabbitMQ 의 Exchange 에 발행된다.

### 2. Exchange
- Producer 로 부터 전달받은 Message 를 Queue 에게 라우팅 하는 역할
- Exchange 에 어떤 조건으로 라우팅할지 규칙을 정할 수 있다.
- Exchange 는 Direct, Fanout, Topic, Headers 4가지의 유형이 존재한다.

### 3. Bindings
- Exchange 와 Queue 의 관계를 나타낸다.
- Exchange 는 Binding 된 Queue 로 규칙에 의해 라우팅을 하게 된다.

### 4. Queue
- Consumer 에게 Message 를 전달하는 역할
- In-Memory 또는 Disk 에 Message 를 보관한다.

### 5. Consumer
- Message 를 수신하는 주체

## Exchange 유형
- Direct Exchange: 라우팅 키가 정확히 일치하는 큐에 메시지 전달
- Topic Exchange: 패턴 매칭을 통해 라우팅 키가 일치하는 큐에 메시지 전달
- Fanout Exchange: 바인딩된 모든 큐에 메시지를 브로드캐스트
- Headers Exchange: 메시지 헤더 속성을 기반으로 라우팅


### 1. `Direct Exchage`

`Exchange` 와 `Binding` 된 `Queue` 중 `Routing Key` 가 일치하는 `Queue` 에게 `Message` 를 전달한다.

![Direct Exchange](/posts/rabbitmq/rabbitmq/direct_exchange.png) 

### 2. `Topic Exchange`

좀더 유연하게 `Message` 를 전달할 수 있다.
`*` 과` #` 을 사용하여 `Routing Key` 를 구성할 수 있으며, `*` 은 단어하나를 대체하고, `#` 은 0 개 이상의 단어를 대체 한다.

![Topic Exchange](/posts/rabbitmq/rabbitmq/topic_exchange.png) 

### 3. `Fanout Exchange`

`Exchange` 와 `Binding` 된 모든 `Queue` 에게 동일한 `Message` 를 전달한다.

![Fanout Exchange](/posts/rabbitmq/rabbitmq/fanout_exchange.png) 

### 4. `Headers Exchange`

`Header` 에 정의된 `key-value` 쌍을 사용하여 `Queue` 에게 `Message` 를 전달한다.

![Headers Exchange](/posts/rabbitmq/rabbitmq/header_exchange.png) 



## 스프링 부트와 RabbitMQ 연동

### 1. RabbitMQ 실행 ( Docker )
```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### 2. 의존성 설정 (gradle)
```shell
implementation 'org.springframework.boot:spring-boot-starter-amqp'
```

### 3. properties.yaml 설정
```yaml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
```

### 4. RabbitMqConfig Class

```java
@Configuration
public class RabbitMqConfig {
    @Value("${spring.rabbitmq.host}")
    private String rabbitmqHost;

    @Value("${spring.rabbitmq.port}")
    private int rabbitmqPort;

    @Value("${spring.rabbitmq.username}")
    private String rabbitmqUsername;

    @Value("${spring.rabbitmq.password}")
    private String rabbitmqPassword;

    /* Queue 설정 */
    @Bean
    public Queue queue() {
        return new Queue("sample.queue");
    }

    /* Exchange 설정 */
    @Bean
    public DirectExchange exchange() {
        return new DirectExchange("sample.exchange");
    }

    /* Binding 설정*/
    @Bean
    public Binding binding() {
        return BindingBuilder
                .bind(queue())
                .to(exchange())
                .with("sample.routingkey");

    }

    /* RabbitMQ 연결 설정 */
    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory();
        connectionFactory.setHost(rabbitmqHost);
        connectionFactory.setPort(rabbitmqPort);
        connectionFactory.setUsername(rabbitmqUsername);
        connectionFactory.setPassword(rabbitmqPassword);

        return connectionFactory;
    }

    /* 연결 설정으로 연결 후 실제 작업을 위한 RabbitTemplate */
    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        
        // JSON 형식의 메시지를 직렬화하고 역직렬할 수 있도록 설정
        rabbitTemplate.setMessageConverter(jackson2JsonMessageConverter());
        return rabbitTemplate;
    }

    /* 메시지를 JSON 기반으로 변환하는 메시지 컨버터 */
    @Bean
    public MessageConverter jackson2JsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

}

```


### 5. RabbitMqService Class
```java
@Slf4j
@Service
@RequiredArgsConstructor
public class RabbitMqService {

    private final RabbitTemplate rabbitTemplate;

    /**
     * Producer
     */
    public void sendMessage(MessageDto messageDto) {
        log.info("Message: {}", messageDto);
        rabbitTemplate.convertAndSend("sample.exchange", "sample.routingKey", messageDto);
    }

    /**
     * Consumer
     * 등록한 queue 에서 Message 를 받음
     */
    @RabbitListener(queues = "sample.queue")
    public void receiveMessage(MessageDto messageDto) {
        log.info("Received Message : {}",messageDto);
    }
}
```