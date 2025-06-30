---
title: "JPA 엔티티 Proteced 생성자 사용 이유"
description: "JPA 에서 엔티티 설계시 Protected 생성자를 사용하는 이유를 알아보도록 하겠습니다."
date: "2025-05-29"
category: "jpa"
---

JPA 에서 Entity 설계시 아래와 같이 기본생성자를 Protected 로 설정한 것을 자주 볼 수 있을 것이다.


```java
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "orders")
@Entity
public class Order extends BaseEntity {
  ...
}
```



@NoArgsConstructor에서 AccessLevel은 Lombok이 생성해주는 기본 생성자의 **접근 제어자(public, protected, private 등)**를 지정하는 옵션입니다.

Lombok의 @NoArgsConstructor 어노테이션은 파라미터가 없는 기본 생성자를 자동으로 생성해줍니다. 이때, 이 기본 생성자의 접근 수준을 AccessLevel 열거형을 사용하여 명시적으로 제어할 수 있습니다.

주로 사용되는 AccessLevel 값들은 다음과 같습니다:

AccessLevel.PUBLIC: 생성되는 기본 생성자가 public 접근 제어자를 갖습니다. 클래스 외부에서 자유롭게 접근하여 객체를 생성할 수 있습니다. (기본값)
AccessLevel.PROTECTED: 생성되는 기본 생성자가 protected 접근 제어자를 갖습니다. 같은 패키지 내의 클래스나 해당 클래스를 상속받는 자식 클래스에서만 접근할 수 있습니다.
AccessLevel.PRIVATE: 생성되는 기본 생성자가 private 접근 제어자를 갖습니다. 해당 클래스 내부에서만 접근할 수 있습니다.
왜 AccessLevel을 지정할까?
특히 JPA(Java Persistence API)의 엔티티 클래스에서 @NoArgsConstructor(access = AccessLevel.PROTECTED)를 사용하는 경우가 많습니다. 그 이유는 다음과 같습니다:

프록시 객체 생성: JPA는 지연 로딩(Lazy Loading) 등의 기능을 위해 엔티티의 프록시 객체를 생성할 필요가 있습니다. 이때, JPA 구현체(Hibernate 등)가 프록시 객체를 생성하기 위해 기본 생성자에 접근할 수 있어야 합니다. protected 접근 제어자는 같은 패키지나 상속 관계에서 접근을 허용하므로, JPA가 프록시 객체를 생성하는 데 문제가 없습니다.
의미 없는 객체 생성 방지: public 기본 생성자를 허용하면 코드 어느 곳에서든 new MyClass()와 같이 객체를 생성할 수 있게 됩니다. 이는 특정 필드가 반드시 초기화되어야 하는 객체의 경우, 필드가 비어있는 "불완전한" 객체가 생성될 위험이 있습니다. protected나 private로 제한함으로써, 객체 생성 시 의도치 않은 상태의 객체가 만들어지는 것을 방지하고, 의미 있는 다른 생성자(예: @AllArgsConstructor나 @Builder를 통해 생성된 생성자)를 사용하도록 유도할 수 있습니다.
캡슐화 강화: 기본 생성자의 접근 수준을 낮춤으로써 클래스의 캡슐화를 강화하고, 객체 생성 로직을 더욱 엄격하게 관리할 수 있습니다.
요약하자면, AccessLevel은 Lombok이 생성하는 기본 생성자의 접근 제어자를 설정하여, 객체 생성 방식에 대한 제어와 캡슐화를 강화하는 데 사용됩니다.