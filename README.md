# Implementación de Sonar (propuesta)

## SonarQube vs SonarCloud

Tanto SonarCloud™ y SonarQube™ son herramientas válidas para ayudar a escribir un código seguro y de calidad en nuestros proyectos. Pero siempre puede surgir la duda, ¿qué producto es mejor para ti y tu equipo?


### SonarCloud™

- **Solución Basada en la Nube**: SonarCloud es una opción sin complicaciones, alojada en la nube, que elimina la necesidad de gestionar la infraestructura.
- **Integración con**:  GitHub.com, Azure DevOps, Bitbucket.org y GitLab.com. SonarCloud™ está alojado en SonarSource en AWS y es el camino más fácil para comenzar a escanear tu código en minutos.

### SonarQube™

- **Autohospedado**: SonarQube ofrece la flexibilidad de ser autohospedado en nuestra infraestructura, lo que permite un mayor control y personalización.
- **Integración Profunda**: Se integra fácilmente con nuestro flujo de trabajo de desarrollo, proporcionando análisis en tiempo real y permitiendo la incorporación de reglas personalizadas.


Ambas opciones ofrecen paneles de control intuitivos y detallados, proporcionando una visión holística de la salud del código. La elección entre SonarQube y SonarCloud dependerá de nuestras necesidades específicas de alojamiento y de la profundidad de integración requerida en nuestro entorno de desarrollo.

La implementación de SonarQube o SonarCloud no solo mejorará la calidad del código, sino que también fomentará prácticas de desarrollo más robustas, ayudando a identificar y corregir problemas de manera proactiva. Este enfoque contribuirá a la entrega de software más confiable y sostenible, alineándonos con estándares de calidad más elevados.

## Configuraciones 

### SonarCloud™

Para empezar este pequeño tutorial de implementación de SonarCloud en un proyecto, en este caso de Angular, lo primero que debemos tener en cuenta es la configuración del repositorio y el servicio de alojamiento que vamos a usar, para este caso vamos a estar haciendolo en Github, pero también se puede hacer en BitBucket, GitLab, Azure Devops.

1. **Como primer paso debemos crear nuestro repositorio**

![alt text](./documentation/image.png)

2. **El segundo paso es empezar a enlazar nuestro proyecto con SonarCLoud, para esto nos dirijimos a https://sonarcloud.io/login y escogemos la opción de Github**

![alt text](./documentation/image-1.png)

3. **Una vez hallamos escogido, llegamos a esta vista donde debemos importar o crear una organización para poder usar esta herramienta**

![alt text](./documentation/image-2.png)

4. **Una vez realizada esta configuración nos dirijimos al apartado de Autorizaciones y verificamos que tengamos SonarCloud habilitado**

![alt text](./documentation/image-31.png)

5. **Ya habiendo validado esto vamos a escoger el proyecto que creamos previamente para relacionarlo con SonarCloud**

![alt text](./documentation/image-4.png)
![alt text](./documentation/image-5.png)
![alt text](./documentation/image-6.png)
![alt text](./documentation/image-7.png)

6. **Terminamos de configurar detalles de la organización, escogemos el plan de pago y los proyectos que vamos a configurar con Sonar**

![alt text](./documentation/image-8.png)
![alt text](./documentation/image-9.png)
![alt text](./documentation/image-10.png)

7. **Por ultimo le damos click a crear proyecto**

![alt text](./documentation/image-12.png)


8. **Una vez hallamos hecho esta configuración nos redirijirá al siguiente tablero: https://sonarcloud.io/summary/overall?id={organization_id}_{nombre_proyecto} y vemos que ya tenemos nuestro proyecto configurado con SonarCloud**

![alt text](./documentation/image-11.png)

9. **El siguiente paso es establecer cuales serán las métricas de calidad que se van a seguir dentro del proyecto**

- Para esto nos vamos a dirigir a https://sonarcloud.io/project/quality_gate?id={organization_id}_{nombre_proyecto} y damos click en "Organization's settings." 

![alt text](./documentation/image-23.png)

- Esto nos redirige a la siguiente pantalla donde se nos muestran las metricas que vienen definidas por defecto en SonarCloud

![alt text](./documentation/image-24.png)

- Lo siguiente es definir nuevas métricas personalizadas según las necesidades del proyecto, para esto damos click en el botón "Copy" que se nos muestra en la parte superior dereha de la pantalla, y esto nos abre una pequeña modal para crear nuestras nuevas metricas a partir de la base que ya trae SonarCloud predefinida.


![alt text](./documentation/image-25.png)

- Una vez hecho esto, ya habremos creado nuestra base customizada, solo nos resta editarla y establecer nuestros nuevos parametros. Aquí podemos visualizar metricas como la cobertura, Lineas duplicadas, Clasificación de manteniblidad, La clasificación de confiabilidad, y otras metricas de seguridad que vienen por defecto.


![alt text](./documentation/image-26.png)

- Seleccionamos el proyecto con el que estamos trabajando

![alt text](./documentation/image-27.png)

- Y ya podemos empezar a editar y/o agregar nuevas metricas de desarrollo para nuestro proyecto

Ejemplo: Editar métrica de la cobertura
![alt text](./documentation/image-28.png)

Ejemplo: Agregar nuevas metricas de desarrollo, este caso escogimos que todo el codigo debe tener como minimo un 80% de cobertura en pruebas unitarias
![alt text](./documentation/image-29.png)

- Una vez hallamos terminado de definir nuestras nuevas métricas, nos dirigimos a los tres puntos que se encuentran en la parte superior derecha de la pantalla y le damos click, para luego seleccionar la opción de "Set as Default" y con esto ya tendremos definidas nuestras nuevas métricas

![alt text](./documentation/image-30.png)



## Configuración de ambiente para el desarrollador

**El siguiente paso es configurar nuestro ambiente de trabajo con SonarLint, una vez que hallamos clonado el proyecto.**

- Primero instalamos el plugin de SonarLint en nuestro editor de codigo
![alt text](./documentation/image-32.png)


- Luego abrimos la paleta de comandos (Ctrl + Shift + P) en VSC y seleccionamos "SonarLint: Connect to SonarCloud".
![alt text](./documentation/image-13.png)


- Dentro nos va a pedir Un User Token y una Organization Key.
![alt text](./documentation/image-14.png)


- Lo vamos a obtener en la siguiente dirección https://sonarcloud.io/account/security, para obtener el token se ingresa un indicativo y se genera allí mismo
![alt text](./documentation/image-17.png)


- Ya completados estos pasos, en nuestro editor de codigo podemos visualizar que se marcan advertencias sobre el código que no cumple con el estandar o parametros demarcados en SonarCloud
![alt text](./documentation/image-16.png)


## Fujo de trabajo diario


Ya habiendo enlazado nuestra configuración de SonarCloud con SonarLint en nuestro repositorio local, estamos listos para empezar a desarrollar.

Aquí va una pequeña demostración de como realizar la entrega de nuestras tareas una vez hallamos terminado el desarrollo:

1. **Ya publicada nuestra rama y creado el Pull Request, SonarCloud pasados unos segundos comenzará a analizar nuestro codigo en busca de posibles defectos y malas prácticas en el codigo**

![alt text](./documentation/image-18.png)

- Aquí vemos más a detalle y organizado de acuerdo a la severidad cuales son las incidencias en nuestro código


- Severidad Alta
![alt text](./documentation/image-19.png)

- Severidad Media

![alt text](./documentation/image-20.png)

-Severidad Baja

![alt text](./documentation/image-21.png)

- Detalle puntual en el código

![alt text](./documentation/image-22.png)



### SonarQube™

Para la implementación de SonarQube en un proyecto, lo primero que debemos tener en cuenta es la configuración del repositorio y el servicio de alojamiento que vamos a usar, para este caso vamos a estar haciendolo en Github, pero también se puede hacer en BitBucket, GitLab, Azure Devops.

1. **Como primer paso debemos crear nuestro repositorio**

![Alt text](image.png)

2. **El segundo paso es configurar nuestro servidor donde va a estar alojado SonarQube, para esto vamos a seguir la siguiente documentación, para este caso se configura en un servidor Windows**

- **Servidor**: https://medium.com/kocsistem/sonarqube-installation-on-windows-server-4f6fe95b7440
- **Local**: https://www.fosstechnix.com/how-to-install-sonarqube-on-windows-4-steps/

3. **Una vez tengamos el servidor configurado y estemos logueados, lo siguiente es empezar a en lazar nuestro servidor de SonarQube con nuestro repositorio de Github**

- Para esto nos vamos a nuestro servidor, nos logueamos y se nos va a presentar la siguiente pantalla, donde vamos a seleccionar creacion de un proyecto local.

![Alt text](image-1.png)

- Luego vamos a darle un nombre personalizado y definir cual será su rama principal y le damos en siguiente

![Alt text](image-2.png)

- Luego escojemos la base de analisis de codigo en Sonar, damos click en "Crear Proyecto"

![Alt text](image-3.png)

- Esto nos lleva a la siguiente pantalla donde vamos a seleccionar el metodo de analisis de nuestro proyecto, que en este caso va a ser por medio de Github Actions.

![Alt text](image-4.png)

- Una vez aquí se nos presentan los pasos que debemos seguir para configurar nuestro proyecto

![Alt text](image-5.png)

4. **Ahora vamos a proceder a la configuración del repositorio en Github, para eso vamos a seguir todos los pasos que nos presentan en el paso anterior**

- Dentro del repositorio de Github nos vamos a ir a "settings"

![Alt text](image-6.png)

- Luego en el menu de la izquierda seleccionamos Secrets and variables > actions

![Alt text](image-7.png)

- En este punto vamos a crear dos nuevos "Repository secrets", para crear el primero damos click en "New repository secret" 

![Alt text](image-8.png)

- Esto nos va a mostrar un formulario donde debemos establecer la llave y su valor respectivo, para llenar este nos vamos nuevamente al paso a paso de SonarQube y copiamos la llave.

![Alt text](image-10.png)

![Alt text](image-9.png)

- Y luego generamos el token.

![Alt text](image-11.png)

![Alt text](image-12.png)

- Al final el formulario queda así

![Alt text](image-13.png)

- Damos click en "Add secret" para guardar esa secret y procedemos a la siguiente, aquí vamos a escoger nuestro servidor donde va a estar alojado el SonarQube. una vez guardamos esta secret pasamos el siguiente paso

![Alt text](image-14.png)

![Alt text](image-15.png)

- El siguiente paso consiste en generar los archivos de configuracion "sonar-project.properties" y el "build.yml"

![Alt text](image-16.png)

- Para esto nos vamos a la vista principal de nuestro repositorio en Github y damos click en el boton de Add file > Create new file.

![Alt text](image-17.png)

- Una vez aquí vamos a definir la ruta y el contenido de este nuevo fichero y comiteamos el este nuevo cambio

![Alt text](image-18.png)

![Alt text](image-19.png)

- Ahora procedemos a crear el "build.yml", hacemos el mismo procedimiento

![Alt text](image-20.png)

- Una vez hecho esto ya tendríamos nuestra configuración lista, solo nos queda ir a nuestras actions para visualizar la ejecucíon de nuestra Action

![Alt text](image-21.png)

- Aquí debemos esperar a que termine de ejecutarse 

![Alt text](image-22.png)

![Alt text](image-23.png)

- Luego nos dirijimos a nuestro servidor de SonarQube para ver los resultados del analisis del proyecto

![Alt text](image-24.png)

- Con esto ya tendríamos nuestro proyecto de Github sincronizado en SonarQube


5. **Para las configuraciones de métricas y de SonarLint podemos revisar la configuración de SonarCloud ya que son los mismos pasos**


**Con esto finalizamos nuestras propuestas de implementación de Sonar, solo resta de parte del equipo escoger la version que más se ajuste a las necesidades del proyecto y por supuesto a las del equipo de desarrollo**

