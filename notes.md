# 100 days Angular

# Component

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

## Component Communication

### 1. Open Modal ( Modal is children Component )

![image](https://user-images.githubusercontent.com/31009750/159121489-552c16b6-a5a6-4108-9f84-16d215bdcde6.png)
![image](https://user-images.githubusercontent.com/31009750/159121497-efc4e927-3cc3-4cbe-b662-d6f6d6f13de1.png)

**Event Listener**

![image](https://user-images.githubusercontent.com/31009750/159121531-6508a7b1-3972-4778-a542-11bd19d2e6d5.png)

**Key Press Listener**

![image](https://user-images.githubusercontent.com/31009750/159121547-05ce3e8d-1436-47b3-93f1-e0fc2ddfc88c.png)

**FullList Event**

https://github.com/angular/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L78

https://www.w3.org/TR/DOM-Level-3-Events-key/#named-key-attribute-values

> Search "click" or "keypress"

**Parent**
![image](https://user-images.githubusercontent.com/31009750/159121640-b4962de3-9e62-4e83-9dd3-7db3f305c4c2.png)
![image](https://user-images.githubusercontent.com/31009750/159121647-8714ac98-cb05-40d7-9240-690312ec6c31.png)
![image](https://user-images.githubusercontent.com/31009750/159121657-5bef5ef6-bf5c-4ee9-a296-ad6e41a918ea.png)

## Content Projection

> Content projection is a pattern in which you insert, or project, the content you want to use inside another component

### Single-slot content projection

![image](https://user-images.githubusercontent.com/31009750/159148526-958f31a2-cf33-42f6-afdd-415b7337ea0b.png)
![image](https://user-images.githubusercontent.com/31009750/159148530-31d6208f-656b-4a9b-8486-5e9d02e27aa8.png)

### Multi-slot content projection

![image](https://user-images.githubusercontent.com/31009750/159148857-09cbf976-f2bd-4387-823b-38833d247f42.png)
![image](https://user-images.githubusercontent.com/31009750/159148864-c98d578a-0979-4af8-a279-54e7d08a1b6f.png)

### Conditional content projection

**ng-template**

![image](https://user-images.githubusercontent.com/31009750/159149526-ff56e9f6-d2d6-4f42-a43b-ae84dccf5f4e.png)

**ng-container**

![image](https://user-images.githubusercontent.com/31009750/159149544-381bc7b7-117c-47da-bf31-1e9c250735c2.png)

![image](https://user-images.githubusercontent.com/31009750/159149564-65856b3b-3a40-4fc0-a61d-a3868cd90e1c.png)

# Template

# Directives

![image](https://user-images.githubusercontent.com/31009750/159153363-0a9a79a4-22c5-4338-8b88-4c2b3ef59104.png)

## Built-in attribute directives

### NgClass: Adds & Removes Set of CSS Classes

### NgStyle: Adds & Removes Set of HTML Styles

![image](https://user-images.githubusercontent.com/31009750/159154751-b7bca3bc-f506-446b-8f67-f6f3e0d6b732.png)
![image](https://user-images.githubusercontent.com/31009750/159154766-927ab4f3-5440-4686-bebf-243f76b70f57.png)

### NgModel: Adds two-way data binding to an HTML form element.

![image](https://user-images.githubusercontent.com/31009750/159155623-56b560b6-7ea6-4dd4-8504-21f9b3d77c0e.png)

## Built-in structural directives

## NgIf

![image](https://user-images.githubusercontent.com/31009750/159161203-cc41d05e-4ab5-48de-ba0b-1b4a61afa3c2.png)

## NgFor

**Without trackby**
![image](https://user-images.githubusercontent.com/31009750/159160704-4a39d008-102a-4735-b275-8c08c699867b.png)

> When the entire list has been prefetch, entire component will be rerendered
> ![image](https://user-images.githubusercontent.com/31009750/159160804-901a6323-8172-4884-bbb2-234acd575bb3.png)

**With tracky**

> Only the item changed will be rerendered
> ![image](https://user-images.githubusercontent.com/31009750/159160835-605d87c0-ef02-4fc1-b6fb-2e73c70a636f.png)
> ![image](https://user-images.githubusercontent.com/31009750/159160846-937ad649-1da7-4f0e-b33e-203e69b32174.png)
> ![image](https://user-images.githubusercontent.com/31009750/159160876-3da6331f-29df-4e9e-9fe2-db3a1455a34a.png)

## NgSwitch(attr), NgSwitchCase(structural), ng-container

![image](https://user-images.githubusercontent.com/31009750/159162394-b4dd8f85-5188-4aa5-b9b9-4010bcdfa5f5.png)
