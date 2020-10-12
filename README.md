 # Recounter.js

 Crea recuentos de tus **visitas** , **contenidos populares** o cualquier otro tipo de recuentos con estas pequeñas animaciones:

![](https://media2.giphy.com/media/zJWDhm5Ju4HbfN7s8S/giphy.gif)

 para inicializar un contador debemos agregar el atributo **data-recount** con una clase llamada **.recount** a un elemento en el **DOM**.

 **data-recount** recibira como valor la cantidad a la que llegara el contador al  finalizar y listo!.

~~~html
    <div class="recount" data-recount="297"></div>
~~~

## Opciones disponibles

 Apartir de aqui todo es **opcional**.
   
 El lapso de tiempo que tardara en llegar hasta el final es de 600ms pero puedes utilizar **data-time** para aumentar la velocidad del contador o hacerla mas lenta.

 > Si no se agrega este atributo se le asignara por defecto 600ms.

~~~html
     <div class="recount" data-recount="1134" data-time="600"></div>
~~~

 Al crear un contador este aparecera oculto y aparecera cuando el scroll este posicionado justo para que puedas observar como este aparece, por defecto tiene una transición de 600ms pero puedes hacerla mas rapida o lenta.

 Si deseas cambiar la velocidad hay que agregar **data-delay** seguido del tiempo que pasara antes de aparecer por completo el contador.

~~~html
     <div class="recount" data-recount="1134" data-time="600" data-delay="1s"></div>
~~~

 La siguente opcion seria agregar **data-parentfadein** al contenedor padre del contador para que se pueda envolver al contador con otros elementos y asi aparecer al mismo tiempo.

**data-parentfadein** como valor recibe: "yes" para utilizarlo.

~~~html
    <div class="recount-content" data-parentfadein="yes">
        <div class="recount" data-recount="354" data-time="600"></div>
     </div>
~~~

