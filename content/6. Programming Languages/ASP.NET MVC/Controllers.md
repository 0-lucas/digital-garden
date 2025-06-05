# What is it?

In a [[Model-View-Controller]] application, the *controller* is the **layer responsible** for receiving all [[HTTP]] requests from the user, **interpreting it**, **requesting data from the [[Models|model]]**, and returning it to the [[Views|view]]. In other words, it connects the [[Views|view]] and the [[Models|model]].

![[mvc example.png]]
___
# ASP.NET Controllers

In [[ASP.NET]], a *controller* is a class derived from the `Microsoft.AspNetCore.Mvc.Controller` class, used to define a **set of related methods** called *actions*. An *action* is any **public method** defined inside the *controller*.

An sample *controller* that returns the index [[Views|view]], with an arbitrary action in [[ASP.NET]] [[Model-View-Controller]], can be defined with:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace BookProject
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }

        // GET: Home/SecondAction/id
        public string SecondAction(int id)
        {
            return $"{id} squared: {id * id}";
        }
    }
}
```