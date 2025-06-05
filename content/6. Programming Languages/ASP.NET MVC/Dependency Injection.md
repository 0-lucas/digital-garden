# What is it?

*Dependency Injection* in [[ASP.NET]] development, is a technique used for **creating instances of needed dependencies** in different parts of an application. **Each dependency is a [[Services|Service]]**, with shared functionality that can be reused.

![[dependency injection.png]]
___
# Injecting services

To use a [[Services|Service]], it needs to be **injected**. Let's inject a [[Services|Service]] in the [[Middleware Pipeline]]:

```csharp
// Set WebApplicationBuilder  
var builder = WebApplication.CreateBuilder(args);  
  
// Register services  
builder.Services.AddSingleton<IService, MyService>();  
  
// Set to building  
var myApp = builder.Build();  
  
void ConfigureMiddleware(IApplicationBuilder app)  
{  
    //  From the HTTP context, defines the first middleware and invokes the second  
    app.Run(async context =>  
    {  
        await context.Response.WriteAsync($"Hello from {context.Request.Path} \n");  
  
        // Injects service  
        var myService = app.ApplicationServices.GetRequiredService<IService>();  
        await context.Response.WriteAsync(myService.Method());  
    });  
}  
  
// Applies configuration  
ConfigureMiddleware(myApp);  
  
// Runs the WebApp.  
myApp.Run();
```



