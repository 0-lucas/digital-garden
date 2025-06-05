# What is it?

The [[ASP.NET]] framework implements a **modular pipeline** that is executed between the **HTTP request** and the **server response**. Think of it as the **entry point of the application**. This is the *middleware pipeline*.

![[ASP middleware.png]]

The *middleware pipeline* contains **one or more middleware**, each **executing an action**, **calling the next middleware**, executing **another action** while awaiting the response, and then **returning the response**.

>[!tip]
>Each **middleware component can be thought of** as a separate [[Services|Service]]. For example, you can use the `.AddMvc()` service to add this functionality to your application.

Some middleware don't implement the `next()` method, resulting in **not calling a next middleware**. These middleware are referred as a *terminal middleware*, most used with the `.Run()` method.

Defining a *middleware pipeline*, that implements **asynchronous** messages, with each middleware **calling the next until the terminal middleware**.

```csharp
// Set WebApplicationBuilder  
var builder = WebApplication.CreateBuilder(args);  
  
// Set to building  
var myApp = builder.Build();  
  
void ConfigureMiddleware(IApplicationBuilder app)  
{  
    //  From the HTTP context, defines the first middleware and invokes the second  
    app.Use(async (context, next) =>  
    {  
        await context.Response.WriteAsync($"First mid \n");  
        await next.Invoke();  
        await context.Response.WriteAsync("Second mid \n");  
    });  
      
    app.Run(async context => {  
        // Terminal middleware. Gets requested path and writes in the message  
        await context.Response.WriteAsync($"Hello from {context.Request.Path} \n");  
    });  
}  
  
// Applies configuration  
ConfigureMiddleware(myApp);  
  
// Runs the WebApp.  
myApp.Run();
```

>[!caution] Short-circuiting the pipeline
>Every middleware that is not terminal, **should invoke the next middleware**. If 
>not, then it will **short-circuit the pipeline**.
>At this point, the **pipeline will stop running** and only the middlewares already called will respond.
