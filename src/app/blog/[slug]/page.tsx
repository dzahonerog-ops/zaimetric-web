import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { posts, getPostBySlug, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://zaimetric.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Content map for all blog posts
const content: Record<string, string> = {
  "que-es-geo-generative-engine-optimization": `
El GEO, o Generative Engine Optimization, es la disciplina que optimiza la presencia digital de una empresa para que los motores de búsqueda con inteligencia artificial — ChatGPT, Gemini, Perplexity, Copilot o Claude — la mencionen, recomienden y citen cuando los usuarios hacen preguntas relevantes.

En términos simples: si el SEO te ayuda a aparecer cuando alguien busca en Google, el GEO te ayuda a aparecer cuando alguien le pregunta a una IA.

Y eso empieza a importar mucho. Según datos de 2025, más de 1.000 millones de consultas mensuales se realizan a través de motores de IA generativa. La búsqueda está cambiando — y el posicionamiento tiene que cambiar con ella.

## Por qué el GEO es diferente al SEO tradicional

El SEO de Google funciona con palabras clave, backlinks y factores técnicos de la página. El GEO funciona de forma diferente: los LLMs (modelos de lenguaje como GPT-4 o Gemini) no indexan webs en tiempo real. Sintetizan información de múltiples fuentes y generan respuestas.

Por eso, para aparecer en una respuesta de IA necesitas algo distinto a lo que necesitas para rankear en Google.

Lo que una IA necesita para recomendarte:
- Que exista información consistente y verificable sobre tu marca en múltiples fuentes
- Que tu web tenga contenido en formato citable (datos, FAQs, artículos estructurados)
- Que tengas autoridad en tu sector: menciones en medios, directorios, reseñas
- Que seas coherente: el nombre, descripción y categoría deben ser iguales en todos los canales

Lo que una IA no valora igual que Google:
- El keyword stuffing o la densidad de palabras clave
- Backlinks de baja calidad
- Contenido duplicado o thin content

## Los 3 pilares del GEO

El GEO no se consigue con un truco. Se construye sobre tres pilares que trabajan juntos:

### Pilar 1 — Autoridad de contenido

Crear contenido largo, estructurado y con datos que una IA querría usar como fuente. Artículos de fondo sobre tu sector, guías completas, análisis con cifras reales. Cuanto más citable es tu contenido, más probabilidad de que una IA lo sintetice.

### Pilar 2 — Respuesta directa

FAQs estratégicas diseñadas para responder exactamente lo que un usuario preguntaría a una IA. Listas, comparativas y definiciones en formato conciso. La primera frase de cada respuesta debe ser la respuesta — sin preámbulos.

### Pilar 3 — Señales externas

Presencia en las fuentes que los LLMs consultan: Google Business Profile, Tripadvisor, directorios sectoriales, medios digitales con autoridad. Los LLMs sintetizan múltiples fuentes — cuantas más te mencionen, más visible eres.

## Cómo se conecta el GEO con el SEO y el SEO local

Aquí está el punto que muy pocas agencias explican: el GEO no es un sistema separado del SEO. Se construye encima de él.

Cuando un LLM decide si recomendar un negocio, usa señales que son exactamente las que trabaja el SEO:

- Posición en Google → Los LLMs usan los resultados de Google como señal de relevancia
- Google Business Profile → Es una de las fuentes que más pesan para consultas locales en IAs
- Reseñas y reputación → Las IAs priorizan negocios con muchas reseñas positivas recientes
- Estructura de la web → Una web bien organizada, con datos estructurados, es más citable

Por eso en ZAIMETRIC trabajamos los tres niveles de forma integrada: web sólida + SEO local + contenido de autoridad. El resultado es visibilidad en Google y en las IAs al mismo tiempo.

## ¿Quién debería preocuparse por el GEO ahora?

La ventana de oportunidad está abierta — pero no lo estará para siempre.

Los negocios que empiecen a trabajar el GEO en los próximos 12-18 meses tendrán una ventaja competitiva significativa. Los que esperen partirán desde cero frente a marcas ya establecidas en los LLMs.

El GEO es especialmente urgente para:

- Negocios con competencia local (restaurantes, hoteles, clínicas, gimnasios): las IAs ya responden a consultas como "mejor restaurante italiano en Madrid" con nombres concretos
- Agencias y consultoras B2B: los decisores de empresa usan cada vez más IAs para encontrar proveedores
- Cualquier negocio cuyo cliente potencial use IA para buscar soluciones: que en 2026 es casi todo el mundo

## Preguntas frecuentes sobre GEO

**¿Cuánto tiempo se tarda en ver resultados con el GEO?**
Entre 3 y 6 meses para las primeras apariciones consistentes. El GEO es acumulativo: las señales se construyen con el tiempo. Una vez establecidas, son difíciles de revertir por la competencia.

**¿El GEO reemplaza al SEO?**
No. El GEO se construye encima del SEO. Un buen posicionamiento en Google es una de las señales más importantes para los LLMs. Los dos trabajan juntos.

**¿Cómo sé si mi empresa aparece en las IAs?**
La forma más directa es preguntarle manualmente a ChatGPT, Gemini y Perplexity con las preguntas que haría tu cliente ideal. Si no apareces, es el punto de partida para trabajar el GEO.

**¿Qué es más importante para el GEO, el contenido o las señales externas?**
Los dos son necesarios, pero el orden importa: primero construyes la base (web sólida, contenido citable, GBP optimizado) y luego amplificás con señales externas (medios, directorios, menciones). Sin la base, las señales externas no se sostienen.

**¿El GEO funciona para cualquier sector?**
Sí, aunque con matices. Los sectores con más consultas locales (hostelería, salud, fitness, servicios profesionales) tienen más urgencia. Los negocios B2B también, porque sus clientes usan IAs para tomar decisiones de compra complejas.

**¿Cuánto cuesta implementar una estrategia GEO?**
Depende del punto de partida y del sector. En ZAIMETRIC integramos el GEO dentro del sistema de crecimiento — no es un servicio aislado con un precio adicional desconectado. Lo construimos junto con el SEO, la web y el posicionamiento local.
  `,

  "que-es-automatizacion-ia-empresas": `
La automatización con IA es la combinación de inteligencia artificial y flujos de trabajo automatizados para eliminar tareas repetitivas y escalar procesos sin necesitar más personal.

## ¿Por qué ahora?

Las herramientas de automatización han madurado. n8n, Make, Zapier — antes eran para ingenieros. Ahora cualquier empresa puede implementarlas en semanas.

## Los 3 componentes de la automatización IA

### 1. Agentes de inteligencia artificial
Los agentes IA son sistemas que pueden tomar decisiones y ejecutar acciones de forma autónoma. Un agente puede leer un email, clasificarlo, extraer información y crear una tarea en tu CRM — sin intervención humana.

### 2. Workflows de automatización
Los workflows conectan aplicaciones y automatizan flujos de datos. Cuando llega un nuevo lead, el workflow puede: guardarlo en el CRM, enviar un email de bienvenida, asignar un comercial y crear una tarea de seguimiento.

### 3. Integración con herramientas existentes
La automatización no requiere cambiar lo que ya usas. Se integra con tu CRM, email, Google Workspace, Slack y más de 300 aplicaciones.

## ¿Cuánto tiempo se puede ahorrar?

Empresas que implementan automatización reportan un ahorro medio de 15 horas semanales en los primeros 30 días. En tareas como:

- Gestión de leads: 4-6 horas/semana
- Seguimiento de clientes: 3-4 horas/semana
- Reporting: 2-3 horas/semana
- Atención al cliente básica: 5-8 horas/semana

## Por dónde empezar

El error más común es intentar automatizarlo todo a la vez. Empieza por el proceso que más tiempo consume y que tenga pasos bien definidos.
  `,

  "10-procesos-automatizar-ia": `
Si llevas tiempo pensando en automatizar pero no sabes por dónde empezar, esta lista es para ti. No es teoría: son los 10 procesos que más tiempo consumen en empresas pequeñas y medianas, y que puedes automatizar con herramientas accesibles en menos de 30 días.

## 1. Captura y cualificación de leads

Cuando alguien rellena un formulario en tu web, ¿qué pasa después? Sin automatización: el lead llega por email, alguien lo copia en un Excel o CRM, y si no hay seguimiento ese mismo día, se pierde.

Con automatización: el lead entra directamente al CRM, recibe un email de bienvenida automático, y el comercial recibe una notificación en Slack con toda la información. Tiempo ahorrado: 3-4 horas/semana.

## 2. Seguimiento de ventas por email

El 80% de las ventas requieren 5 o más contactos. Pero el 44% de los comerciales abandona después del primero. La solución no es contratar más gente — es automatizar las secuencias de seguimiento.

Herramientas como HubSpot, ActiveCampaign o Brevo permiten crear secuencias automáticas que se activan según el comportamiento del prospecto.

## 3. Onboarding de nuevos clientes

El proceso de bienvenida cuando entra un nuevo cliente suele ser caótico: crear accesos, enviar contratos, programar la reunión de kickoff, actualizar el CRM...

Con un workflow automatizado, todo eso ocurre en segundos: se crea el proyecto en el gestor de tareas, se envía el contrato para firmar digitalmente, se programa la reunión automáticamente y el cliente recibe su guía de bienvenida.

## 4. Generación de informes

¿Cuánto tiempo dedicas cada semana a generar informes? Datos de ventas, métricas de marketing, estado de proyectos... Con automatización, puedes generar y enviar informes semanales automáticamente cada lunes a las 8:00.

## 5. Gestión de facturas y pagos

Crear facturas manualmente, enviarlas, hacer seguimiento de los impagados... Todo esto se puede automatizar. Desde la generación automática de facturas cuando se cierra un trato hasta el seguimiento de cobros.

## 6. Publicación en redes sociales

Crear contenido es valioso. Publicarlo manualmente en 4 plataformas distintas, no. Herramientas como Buffer, Hootsuite o Make te permiten programar y publicar automáticamente en todos los canales desde un único lugar.

## 7. Respuesta a consultas frecuentes

Si recibes las mismas preguntas una y otra vez por email o WhatsApp, un agente IA puede responderlas 24/7. No reemplaza la atención personalizada — libera tiempo para las conversaciones que sí requieren un humano.

## 8. Actualización de inventario y stock

Para negocios con productos físicos, actualizar el inventario manualmente es una fuente constante de errores. Con integraciones entre tu tienda online, almacén y sistema de compras, el stock se actualiza automáticamente en tiempo real.

## 9. Gestión de citas y reuniones

El proceso de acordar una reunión (proponer horarios, confirmar, enviar recordatorios) consume más tiempo del que parece. Herramientas como Calendly o Cal.com, integradas en tu flujo de trabajo, eliminan completamente esta fricción.

## 10. Recopilación de testimonios y reseñas

Pedir reseñas a clientes satisfechos es una tarea que siempre se pospone. Un workflow automático puede enviar una solicitud personalizada X días después de finalizar un proyecto, cuando la experiencia está fresca.

## ¿Por dónde empezar?

No intentes automatizar los 10 procesos a la vez. Elige el que más tiempo consume en tu empresa y que tenga pasos bien definidos. En ZAIMETRIC hacemos un diagnóstico gratuito para identificar exactamente qué automatizaciones tienen mayor impacto para tu negocio específico.
  `,

  "web-no-convierte-errores": `
Tienes una web. Tienes visitas. Pero los clientes no llegan. Este es el problema más frecuente que vemos en pymes: tienen una presencia online, pero no genera negocio real.

Después de analizar decenas de webs de empresas pequeñas y medianas, hemos identificado los 7 errores que se repiten sistemáticamente. Lo bueno: todos tienen solución.

## Error 1: El mensaje principal no está claro

Tienes 5 segundos para que un visitante entienda qué haces, para quién y por qué debería importarle. Si tu home dice algo como "Somos una empresa líder en soluciones innovadoras para el mercado actual", has perdido al visitante.

**La solución:** Un titular directo que responda a "¿qué haces y para quién?". Por ejemplo: "Automatizamos los procesos de tu empresa con IA para que ahorres 15 horas semanales."

## Error 2: No hay una llamada a la acción clara

¿Qué quieres que haga el visitante? Si tienes 4 botones con el mismo peso visual compitiendo entre sí, el visitante no hace nada. El cerebro humano necesita que le digan qué paso dar.

**La solución:** Una CTA principal por pantalla, clara y orientada al beneficio. "Solicita tu diagnóstico gratuito" funciona mejor que "Contáctanos".

## Error 3: La web carga lenta

Google ha confirmado que la velocidad de carga afecta directamente al posicionamiento y a la tasa de conversión. Un retraso de 1 segundo puede reducir las conversiones en un 7%. En móvil, la situación suele ser peor.

**La solución:** Optimizar imágenes (WebP, lazy loading), eliminar plugins innecesarios, usar un hosting de calidad y medir regularmente con Google PageSpeed Insights. Apunta a una puntuación superior a 90.

## Error 4: El diseño no transmite confianza

Una web con un diseño anticuado, sin testimonios reales o sin información sobre el equipo genera desconfianza. Especialmente en servicios B2B donde el cliente está valorando invertir varios miles de euros.

**La solución:** Testimonios con nombre y empresa real, casos de éxito con resultados concretos, y una sección "Quiénes somos" con caras reales. La prueba social reduce el riesgo percibido.

## Error 5: No está optimizada para móvil

Más del 60% del tráfico web actual es móvil. Si tu web tiene menús complicados, botones demasiado pequeños o textos que hay que hacer zoom para leer, estás perdiendo más de la mitad de tus visitas.

**La solución:** Diseño mobile-first desde el principio. Prueba tu web en un teléfono real antes de publicar cualquier cambio.

## Error 6: No hay propuesta de valor diferencial

"Somos una agencia de marketing digital con más de 10 años de experiencia." Eso lo dicen todos. ¿Por qué debería elegirte a ti en lugar de a tu competencia?

**La solución:** Identifica lo que te hace diferente de verdad y ponlo en el centro. Puede ser el proceso, la garantía, la especialización en un sector, o los resultados medibles. Sé específico.

## Error 7: No mides nada

Sin datos, tomar decisiones sobre tu web es adivinar. ¿Qué páginas visitan más? ¿Dónde abandonan? ¿Qué botones funcionan?

**La solución:** Instalar Google Analytics 4 y Google Search Console es el mínimo. Con esos datos, en 30 días ya tienes información suficiente para saber qué funciona y qué no.

## Conclusión

Una web que convierte no es una cuestión de diseño bonito — es una cuestión de estrategia. Mensaje claro, llamada a la acción evidente, velocidad, confianza y datos. Si tu web falla en alguno de estos puntos, estás dejando clientes sobre la mesa.
  `,

  "que-es-seo-local-negocio": `
Si tienes un negocio con una ubicación física o que atiende a clientes en una zona geográfica concreta, el SEO local es probablemente la palanca de marketing con mayor retorno que puedes activar hoy.

No necesitas competir con Amazon ni con las grandes marcas nacionales. El SEO local te permite aparecer delante de personas que están buscando exactamente lo que ofreces, en tu ciudad, en el momento en que lo necesitan.

## ¿Qué es el SEO local?

El SEO local es la optimización de tu presencia online para aparecer en los resultados de búsqueda cuando alguien busca un negocio o servicio en una ubicación específica.

Cuando buscas "fontanero urgente Madrid" o "restaurante italiano cerca de mí", Google muestra dos tipos de resultados: el mapa con 3 negocios destacados (el llamado Local Pack o mapa 3-pack) y los resultados orgánicos tradicionales. El SEO local trabaja ambos frentes.

## El mapa 3-pack: la posición de oro

El mapa 3-pack es esa sección con el mapa y tres negocios que aparece en casi todas las búsquedas locales. Aparecer ahí es el equivalente digital a tener el mejor local en la calle principal de tu ciudad.

Las estadísticas son claras: el 76% de las personas que buscan un negocio local en su móvil visitan ese negocio en las siguientes 24 horas. Y el 28% de esas búsquedas resultan en una compra.

## Los 3 pilares del SEO local

### 1. Google Business Profile (antes Google My Business)

Tu ficha de Google Business Profile es el corazón del SEO local. Es lo que aparece en el mapa 3-pack y en el panel de información cuando alguien busca tu empresa directamente.

Una ficha bien optimizada incluye: información completa y actualizada, categorías correctas, fotos de calidad, respuestas a preguntas frecuentes, y especialmente reseñas recientes y con respuesta del propietario.

### 2. Coherencia de NAP (Nombre, Dirección, Teléfono)

Google verifica tu legitimidad como negocio local comprobando que tu nombre, dirección y teléfono son coherentes en todas las plataformas donde apareces: tu web, Google Business Profile, directorios como Páginas Amarillas, Yelp, TripAdvisor, etc.

Una inconsistencia (el número de teléfono diferente en la web y en Google) genera desconfianza en el algoritmo y penaliza tu posición.

### 3. Reseñas y valoraciones

Las reseñas son el factor de confianza más potente en el SEO local. No solo influyen en el algoritmo de Google — también son lo primero que mira un cliente potencial antes de llamar.

Según estudios recientes, el 93% de los consumidores leen reseñas online antes de visitar un negocio local. Y un incremento de una estrella en la valoración media puede aumentar los ingresos entre un 5% y un 9%.

## ¿Cuánto tiempo tarda en funcionar?

El SEO local es más rápido que el SEO nacional. En mercados poco competidos, puedes ver resultados en 60-90 días. En sectores más competitivos, entre 3 y 6 meses. Lo importante es que, una vez conseguida la posición, el tráfico que genera es constante y gratuito.

## ¿Para qué tipos de negocio funciona mejor?

- Servicios locales: fontaneros, electricistas, clínicas, abogados, contables
- Hostelería: restaurantes, bares, hoteles
- Comercio local: tiendas, talleres, concesionarios
- Profesionales independientes con consulta presencial

Si tienes clientes que llegan físicamente a tu negocio o que buscas por zona geográfica, el SEO local te afecta directamente.
  `,

  "que-es-sistema-comercial-empresa": `
Hay dos tipos de empresas: las que tienen un sistema comercial y las que dependen de la suerte.

Las primeras tienen un proceso documentado para convertir contactos en clientes. Las segundas dependen de que los comerciales tengan un buen día, de que el teléfono suene en el momento justo, o de que el cliente potencial recuerde llamar.

La diferencia en resultados es abismal. Y no tiene que ver con el presupuesto ni con el tamaño de la empresa.

## ¿Qué es un sistema comercial?

Un sistema comercial es el conjunto de procesos, herramientas y flujos de trabajo que guían a un prospecto desde el primer contacto hasta convertirse en cliente, y después en cliente recurrente.

No es solo un CRM. No es solo una plantilla de email. Es la integración de todo: cómo llegan los leads, cómo se cualifican, cómo se hace el seguimiento, cómo se cierra la venta y cómo se gestiona la relación post-venta.

## El problema del 78%

Estudios del sector muestran que el 78% de los leads se pierden por falta de seguimiento adecuado. No porque el producto sea malo. No porque el precio sea demasiado alto. Simplemente porque nadie hizo el seguimiento correcto en el momento correcto.

Esto ocurre cuando el proceso comercial depende de la memoria y la disciplina de las personas, en lugar de estar sistematizado y automatizado.

## Los 5 componentes de un sistema comercial efectivo

### 1. Captación estructurada

¿De dónde vienen tus leads? ¿Qué canales funcionan mejor? Un sistema comercial tiene claros los orígenes de los leads y optimiza continuamente los que generan mayor retorno.

### 2. Cualificación automática

No todos los contactos son clientes potenciales. Un sistema efectivo cualifica automáticamente: ¿tienen el problema que resuelves? ¿tienen presupuesto? ¿son el decisor?

### 3. CRM actualizado en tiempo real

El CRM no es solo una base de datos — es el centro de mando del proceso comercial. Debe reflejar en tiempo real el estado de cada oportunidad y qué acción está pendiente.

### 4. Secuencias de seguimiento automatizadas

El seguimiento es donde se gana o se pierde la venta. Con secuencias automatizadas, ningún lead se queda sin respuesta, sin importar si hay 5 o 500 abiertos simultáneamente.

### 5. Métricas y mejora continua

Sin datos, no se puede mejorar. Un sistema comercial mide tasas de conversión en cada etapa del embudo, tiempo medio de cierre y fuentes de leads más rentables.

## ¿Cuándo necesitas un sistema comercial?

Señales claras de que es el momento:
- Pierdes leads porque no haces seguimiento a tiempo
- No sabes cuántas oportunidades tienes abiertas en este momento
- Dependes de 1-2 personas clave para cerrar ventas
- No puedes predecir los ingresos del próximo mes
- Los comerciales dedican mucho tiempo a tareas administrativas

Si te identificas con alguna de estas situaciones, un sistema comercial bien implementado puede transformar tus resultados en menos de 90 días.

## El retorno de la inversión

El ROI de implementar un sistema comercial suele ser uno de los más altos que puede conseguir una empresa. Empresas que pasan de un proceso comercial informal a uno estructurado ven incrementos del 30-50% en la tasa de cierre en los primeros 6 meses.

La razón es simple: no estás consiguiendo más leads — estás convirtiendo mejor los que ya tienes.
  `,

  "optimizar-google-business-profile": `
Google Business Profile (antes Google My Business) es la herramienta gratuita más poderosa que tiene un negocio local para conseguir clientes. Y la mayoría de empresas la tienen a la mitad de su potencial.

Esta guía es práctica: te explica exactamente qué hacer, en qué orden, para que tu ficha trabaje para ti 24/7.

## Paso 1: Reclamar o crear tu ficha

Lo primero es asegurarte de que eres el propietario verificado de tu ficha. Busca tu empresa en Google Maps — si existe una ficha sin verificar, reclámala. Si no existe, créala desde scratch en business.google.com.

La verificación más habitual es por código postal enviado a tu dirección física. Tarda entre 5 y 14 días.

## Paso 2: Completar toda la información básica

Una ficha completa aparece más arriba que una incompleta. Esto incluye:

- **Nombre:** Usa el nombre real de tu negocio, sin añadir keywords (Google lo penaliza)
- **Categoría principal:** Es el factor más importante. Sé específico: "Clínica dental" es mejor que "Médico"
- **Categorías secundarias:** Añade hasta 9 categorías adicionales relevantes
- **Dirección:** Exactamente como está registrada en otros sitios (coherencia NAP)
- **Horario:** Incluye festivos y horario especial cuando corresponda
- **Teléfono:** Usa tu número local, no un número de pago o de centralita
- **Web:** Enlaza a tu web principal

## Paso 3: Escribir una descripción optimizada

La descripción (hasta 750 caracteres) es tu oportunidad de explicar qué haces y para quién. Incluye tus servicios principales, tu diferencial, y menciona naturalmente la ciudad o zona donde operas.

No hagas stuffing de keywords — escribe para el cliente, no para el algoritmo.

## Paso 4: Añadir fotos de calidad

Las fichas con fotos reciben el 42% más de solicitudes de ruta y el 35% más de clics a la web. Las fotos más importantes:

- **Foto de portada:** La primera impresión. Usa una imagen de alta calidad de tu local o de tu servicio en acción
- **Logo:** Bien recortado y en buena resolución
- **Fotos del equipo:** Generan confianza. Caras reales conectan con personas reales
- **Fotos del local o trabajo realizado:** El antes/después si aplica, el proceso, el resultado

Añade mínimo 10 fotos al lanzar y sigue añadiendo regularmente (1-2 por semana).

## Paso 5: Conseguir y responder reseñas

Las reseñas son el factor de conversión más potente. Google premia las fichas con muchas reseñas recientes y con respuestas del propietario.

**Cómo conseguir más reseñas:**
- Crea un enlace directo a la página de reseñas (acortado con un QR) y compártelo con cada cliente satisfecho
- Forma al equipo para pedirlas verbalmente después de cada trabajo bien hecho
- Automatiza el envío del enlace por WhatsApp o email al finalizar el servicio

**Cómo responder reseñas:**
- Responde a TODAS, positivas y negativas, en menos de 24h
- En las positivas: agradece, menciona el nombre y añade algo específico
- En las negativas: agradece el feedback, da contexto, ofrece solución por vía privada

## Paso 6: Publicar en Google Posts regularmente

Los Google Posts son actualizaciones que aparecen en tu ficha. Puedes publicar ofertas, novedades, eventos y artículos. Son invisibles para la mayoría de competidores — úsalos.

Publica al menos 1-2 veces por semana. Los posts caducan a los 7 días (excepto eventos y ofertas con fecha).

## Paso 7: Responder preguntas en Q&A

La sección de preguntas y respuestas de tu ficha es pública. Cualquiera puede hacer preguntas — y cualquiera puede responderlas, incluidos tus competidores.

Toma el control: añade tú mismo las preguntas más frecuentes con sus respuestas. Y monitoriza regularmente para responder las nuevas en menos de 24h.

## Paso 8: Medir y ajustar

Google Business Profile tiene su propio panel de métricas: cuántas veces aparece tu ficha, cuántos clics a la web, llamadas generadas, solicitudes de ruta...

Revisa estas métricas mensualmente. Si una foto tiene muchas más interacciones que el resto, crea más como esa. Si un tipo de publicación genera más clics, priorízalo.

## ¿Cuánto tiempo lleva ver resultados?

En mercados poco competidos, con una ficha bien optimizada y reseñas recientes, puedes entrar en el mapa 3-pack en 60-90 días. En sectores más competidos, entre 3 y 6 meses.

La clave es la consistencia: no es una optimización de una vez, es un proceso continuo.
  `,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postContent = content[slug] || "Contenido completo próximamente.";
  const relatedPosts = posts.filter((p) => p.slug !== slug && p.cluster === post.cluster).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ZAIMETRIC" },
    publisher: { "@type": "Organization", name: "ZAIMETRIC" },
    url: `https://zaimetric.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="blue">
              <Tag size={10} /> {post.cluster}
            </Badge>
            <span className="text-slate-400 text-sm flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-slate-500 text-sm">{formatDate(post.date)}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-slate prose-lg max-w-none"
            style={{
              lineHeight: "1.8",
              color: "#334155",
            }}
          >
            {postContent.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-grotesk font-bold text-slate-900 mt-10 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-grotesk font-bold text-slate-900 mt-8 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 mb-1 text-slate-600">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") return <div key={i} className="h-4" />;
              return (
                <p key={i} className="mb-4 text-slate-600 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

          {/* CTA in article */}
          <div className="mt-12 p-8 rounded-2xl bg-blue-600 text-white">
            {slug === "que-es-geo-generative-engine-optimization" ? (
              <>
                <h3 className="font-grotesk font-bold text-xl mb-3">
                  ¿Aparece tu empresa cuando una IA recomienda negocios como el tuyo?
                </h3>
                <p className="text-blue-100 mb-5 text-sm">
                  Auditoría GEO gratuita. Analizamos tu visibilidad actual en ChatGPT, Gemini y Perplexity
                  y te decimos exactamente desde dónde partes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/servicios/geo" variant="secondary">
                    Ver el servicio GEO <ArrowRight size={16} />
                  </Button>
                  <Button href="/contacto" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    Solicitar diagnóstico gratuito
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-grotesk font-bold text-xl mb-3">
                  ¿Quieres implementar automatización en tu empresa?
                </h3>
                <p className="text-blue-100 mb-5 text-sm">
                  Diagnóstico gratuito. Identificamos qué automatizaciones tienen mayor impacto para tu negocio.
                </p>
                <Button href="/contacto" variant="secondary">
                  Solicita tu diagnóstico gratuito <ArrowRight size={16} />
                </Button>
              </>
            )}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-grotesk font-bold text-slate-900 text-2xl mb-8">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-grotesk font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                    Leer artículo <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
