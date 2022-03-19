# 100 days Angular

## Lifecycle

![image](https://user-images.githubusercontent.com/31009750/159103996-2d54e455-2ec5-451a-9282-94031c937a7e.png)

## Encapsulation

### ViewEncapsulation.Emulated

```ts
encapsulation: ViewEncapsulation.Emulated, // this is default view encapsulation
```

![image](https://user-images.githubusercontent.com/31009750/159101615-8da9d81c-2922-4251-ae56-b65b81b1670c.png)
![image](https://user-images.githubusercontent.com/31009750/159101694-d513c4d4-cf3d-4edb-b066-8162dba909c9.png)

### ViewEncapsulation.None

```ts
encapsulation: ViewEncapsulation.None,
```

![image](https://user-images.githubusercontent.com/31009750/159101716-f30309b9-54f0-4dc6-886e-6621e82a75cc.png)

### ViewEncapsulation.ShadowDom

```ts
encapsulation: ViewEncapsulation.ShadowDom,
```

![image](https://user-images.githubusercontent.com/31009750/159101771-109efbb0-525b-4c1e-b395-a261a02af1c5.png)

**It does not effect by stylesheets in this page**

> If there is no styles or styleUrls in ViewEncapsulation.Emulated mode, this component will automatically set to ViewEncapsulation.None

## Component Interaction

### Parent to Child

#### Input

![image](https://user-images.githubusercontent.com/31009750/159103325-9658102b-d665-482a-91b8-09e670cec59c.png)
![image](https://user-images.githubusercontent.com/31009750/159103344-3b66cbc8-60a9-4850-9794-afcf777ba43b.png)

#### Template Reference

> Parent interacts with child using local variable

**Component Ref**

![image](https://user-images.githubusercontent.com/31009750/159106186-5d6310da-b825-4e06-8336-7e6d2a9b7b18.png)
![image](https://user-images.githubusercontent.com/31009750/159106199-d15e2d1f-19d7-4158-a1b5-b62dc1f05402.png)
![image](https://user-images.githubusercontent.com/31009750/159106210-69e97805-1e46-45a5-b69c-b1ca34533a5e.png)

**ElementRef**

![image](https://user-images.githubusercontent.com/31009750/159106224-c4216970-0751-48ab-8237-02c0b25e3828.png)
![image](https://user-images.githubusercontent.com/31009750/159106250-649d8845-feee-4a97-8870-5ef5af7f1a59.png)
![image](https://user-images.githubusercontent.com/31009750/159106271-eedd5a69-7056-4b5e-8198-5c39e017aed0.png)

#### Parent and children communicate using a service

![image](https://user-images.githubusercontent.com/31009750/159106758-cb019d93-52fe-4875-ba37-22700b1356b5.png)
![image](https://user-images.githubusercontent.com/31009750/159106771-f6eac5b7-af70-4c7f-ad19-faa79d09f325.png)
![image](https://user-images.githubusercontent.com/31009750/159106785-2a418aa3-6b71-4c41-a7c9-9477af7e9b77.png)

#### Why unsubscribe unsubscription is important?

> Let's take a look at this example

![image](https://user-images.githubusercontent.com/31009750/159107090-56a08daa-6a12-43a4-9ee7-6fe63519f242.png)
![image](https://user-images.githubusercontent.com/31009750/159107101-278c715b-034f-43da-ae59-5a5b667aa498.png)

Everytime, user move to another screen and go back to the screen contain this component. Number of observers increased!
![image](https://user-images.githubusercontent.com/31009750/159107145-94f3d716-1d25-4aa7-bb02-0638f6a515d9.png)

**So how we fixed it? Easy peasy!**

![image](https://user-images.githubusercontent.com/31009750/159107193-28128c5f-4553-4933-9ee1-d721de0c8eaf.png)

![image](https://user-images.githubusercontent.com/31009750/159107202-5959f2d2-6fb4-4a40-80bb-c5d5155499eb.png)
![image](https://user-images.githubusercontent.com/31009750/159107188-d76f0566-4b3c-4c70-a8d2-2b1b6bd66591.png)
![image](https://user-images.githubusercontent.com/31009750/159107185-0a28a659-cd9a-42bc-bec4-cdfb7933db62.png)

## Component Styles

```css
:host {
  font-style: italic;
}

:host(.active) {
  font-weight: bold;
}

:host-context(.active) { // same as :host()
  font-style: italic;
}

// The following example targets all <h3> elements, from the host element down through this component to all of its child elements in the DOM.

:host ::ng-deep h3 {
  font-style: italic;
}

/deep/ ~ ::ng-deep >>>
```

**How many ways?**

**Inline**

![image](https://user-images.githubusercontent.com/31009750/159120334-1ec46b55-baa7-4589-992d-b94417a981c8.png)

**Style files in component metadata**

![image](https://user-images.githubusercontent.com/31009750/159120347-d1dc0a7d-7a91-4a49-98be-f3049557483c.png)

**Template Inline Style**

![image](https://user-images.githubusercontent.com/31009750/159120516-a0156637-b9c0-4915-bb41-8e4751d2dc6a.png)

**Template link tags**

![image](https://user-images.githubusercontent.com/31009750/159120530-83e8adb5-101c-439c-86ea-fc73e75f1b8e.png)

**CSS @imports**

![image](https://user-images.githubusercontent.com/31009750/159120579-6584d991-0d0c-4308-ba3c-f728986100ba.png)

**Global styles**

![image](https://user-images.githubusercontent.com/31009750/159120574-e5da62fc-b984-49d3-9213-e0298628a1bd.png)
