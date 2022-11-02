# Multi SST App

Test project for exploring how to set up a multi Serverless Stack (SST) app.

This project started with a [question on the SST Discord server](https://discord.com/channels/983865673656705025/983866416832864350/1034104211492839495):

```
Does anyone know where I can find info about how to build a "multi SST app"? I've searched discord but only found mentions about it, and no deeper discussions. Any info or example project would be helpful.
```

Core members of the SST community responded quickly, like they always do, but no example code or answers beyond "that should be doable" were provided. Therefore this open source project was set up, primarily to make clear what I want to achieve, but also to explore how to implement a multi sst app in a good way, and provide a working example that can be used for inspiration by others, or be used as a reference for improving the multi sst app experience.

## App structure

The idea is to have several "master sst apps" which are built up of several smaller services that in themselves are individual sst apps. In this way we would be able to debug and deploy the full applications with the "master sst apps", but at the same time have a limited service scope when developing the individual services.

The reason we want to do this is that we'll have several micro services that on their own are individual sst apps (for a nice dev experience). They are used as a foundation or platform for building a number of full blown applications, these are the ones I call "master sst apps". Any "master sst app" can consist of some, or all of the service apps. Having all services and master apps in one folder structure/repo would not be feasible.

The services are typically functionality that are needed in many different master apps, like auth, common integrations, admin portal frontend, etc. Like a toolbox with base functionality. The master apps will be built up of selected parts from the toolbox, as well as unique functionality that is needed for each specific app. Note that all master apps will be deployed in its own account and no deployed service will be shared between apps.

## Objectives

### 1. What is the best way to share resources/config between components?

- Global Config-object?
- process.env?
- cdk-output?
- arn?

### 2. Build pipeline

- Build and deploy each app in correct order

### 3. Sub component as imported package

### 4. Other questions

- Possible to collect all apps in one sst console?
