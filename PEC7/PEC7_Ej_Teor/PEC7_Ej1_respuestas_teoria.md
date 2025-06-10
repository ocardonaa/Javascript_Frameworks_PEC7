## a) ¿Qué es y cómo funciona el elemento <RouterLink> en Angular?
- Es una directiva en Angular usada para navegar por distintas rutas en la aplicación. Se usa de modo que se establecen las rutas separadas por / y se emplea un link en el fichero HTML que se muestre. Una vez clicado el link, RouterLink te llevará a donde has establecido esa ruta.
## b) Explica la diferencia entre routerLink y routerLinkActive. ¿Qué otras directivas se pueden utilizar con el router en Angular?
- routerLink se usa para vincular un elemento clicable en HTML.
- routerLinkActive se encarga de añadir o eliminar clases de un elemento HTML en función de si está activo o no.
Otras directivas:
- routerOutlet: marca donde se deberia o si se deberia mostrar el router en el componente.
## c) Describe el servicio ActivatedRouteSnapshot. ¿Cómo se utiliza y en qué casos es útil?
- Es un objeto inmutable de Angular que representa una snapshot de la ruta en un estado y momento particular. Contiene su información. Muy útil por ejemplo para acceder a la información de la ruta en el momento de la inicialización o cuando los parámetros no se esperan cambiar mientras el componente está activo.
## d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)
- Los Route Guards sirven para proteger la carga y descarga de una ruta basandonos en nuestras propias condiciones. Una vez establecidas se usan de modo que pueden decidir si vas a esa ruta o no basado en las condiciones anteriormente mencionadas. Todas las que existen son:
    - CanActivate: determina si puede ser activada.
    - CanActivateChild: determina si los hijos de la ruta se pueden activar o no.
    - CanDeactivate: determina si el usuario puede abandonar la ruta.
    - CanLoad: controla si una ruta puede ser cargada.
    - CanMatch: determina si a una ruta se le puede hacer match.
## e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )
- La carga lazy loading es una forma de cargar los módulos de Angular de modo que reduce la prioridad con la que estos son cargados para reducir el tiempo de carga inicial en cargar la propia página.
Para configurarlo, una vez tenemos creado nuestro modulo con ruta, configurada la UI utilizamos la propiedad loadChildren para que asi se cargue con lazy loading.
## f) Compara las diferencias entre CanDeactivate y CanActivate guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno.
- En si cada uno hace funciones bastante diferentes. Uno nos brinda la posibilidad de ver si la ruta puede ser activada y esto es muy útil en casos de autenticación o autorizaciones y restricción de acceso basandonos en roles o permisos. Por el otro lado tenemos el que mira si el usuario puede abandonar la ruta, que empleamos en caso de que el usuario tenga cambios no guardados en medio de un proceso de completar.
## g) ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?
- Són funciones que se ejecutan antes de acceder a la ruta. Son muy utiles para tareas como comprovar autorizaciones, login o redirecciones. Proximamente con el sistema de login de nuestra aplicación usaremos middleware.