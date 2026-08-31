import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const DOMAIN_NAME = 'cascadadetobera.com';
const ATTRACTION_FULL_NAME = 'Cascada de Tobera';
const ATTRACTION_SHORT_NAME = 'Cascada de Tobera';
const CITY_NAME = 'Tobera';
const STATE_PROVINCE = 'Burgos';
const STATE_REGION = 'Castilla y León';
const COUNTRY_NAME_ES = 'España';
const COUNTRY_NAME_EN = 'Spain';
const COUNTRY_NAME_ZH = '西班牙';
const COUNTRY_CODE_2LETTER = 'ES';
const POSTAL_CODE = '09211';
const LATITUDE = 42.7500214;
const LONGITUDE = -3.3049858;
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/7X96TBmK29sVp9Wp7';
const GOVT_TOURISM_URL = 'https://turismoburgos.org/';
const NEARBY_LANDMARK_1_ES = 'Cañón de Tobera';
const NEARBY_LANDMARK_1_EN = 'Cañón de Tobera';
const NEARBY_LANDMARK_1_ZH = 'Cañón de Tobera（托贝拉峡谷）';
const NEARBY_LANDMARK_2_ES = 'Puente Viejo de Frías';
const NEARBY_LANDMARK_2_EN = 'Puente Viejo de Frías (Old Bridge)';
const NEARBY_LANDMARK_2_ZH = 'Puente Viejo de Frías（弗里亚斯老桥）';
const HERO_IMAGE_URL = `https://${DOMAIN_NAME}/gallery/cascada-de-tobera-1.jpg`;

const LOCALE_DATA: Record<string, {
  ogLocale: string;
  htmlLang: string;
  countryName: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  nearby1: string;
  nearby2: string;
  faq: { q: string; a: string }[];
}> = {
  es: {
    ogLocale: 'es_ES',
    htmlLang: 'es',
    countryName: COUNTRY_NAME_ES,
    metaTitle: 'Cascada de Tobera (Tobera) - Guía del Visitante y Ubicación',
    metaDescription: `Descubre ${ATTRACTION_FULL_NAME}, el emblemático monumento natural de travertino en ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME_ES}. Consulta el mapa de ubicación, horarios, servicios al visitante, el ${NEARBY_LANDMARK_1_ES} cercano y consejos LNT de viaje por Las Merindades.`,
    ogTitle: `Cascada de Tobera - Guía de Viaje de ${CITY_NAME}, ${STATE_PROVINCE}`,
    ogDescription: `Guía oficial de visitantes de ${ATTRACTION_FULL_NAME} en ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME_ES}. Ubicación, flora y fauna protegida Natura 2000 (ES4120017) y acceso.`,
    nearby1: NEARBY_LANDMARK_1_ES,
    nearby2: NEARBY_LANDMARK_2_ES,
    faq: [
      {
        q: '¿Dónde se encuentra exactamente la Cascada de Tobera?',
        a: 'La Cascada de Tobera está situada en la pedanía de Tobera, término municipal de Frías, comarca de Las Merindades, provincia de Burgos, Comunidad Autónoma de Castilla y León, Reino de España. Su dirección postal oficial es C. San Vicente, 2, 09211 Tobera, Burgos, España. En coordenadas geográficas: 42.7500214 N, -3.3049858 W. Altitud aproximada 635 m s. n. m.',
      },
      {
        q: '¿Es gratuita la visita a la Cascada de Tobera?',
        a: 'Sí. La Cascada de Tobera es un espacio natural público y su acceso es completamente gratuito durante todo el año, 24 horas al día. No existe taquilla, ni reserva obligatoria, ni parking de pago en el perímetro. El Área Recreativa municipal sí tiene horario estacional (abril-octubre de 7 a 21:30), pero la visita a la cascada como espacio natural permanece abierta.',
      },
      {
        q: '¿Cuál es la mejor época del año para visitarla?',
        a: 'Cada estación tiene su encanto. La primavera (marzo-junio) es la recomendada por su alto caudal de agua tras las lluvias y deshielos invernales, y por la floración de orquídeas silvestres en las riberas. El otoño (septiembre-noviembre) ofrece un paisaje de bosque caducifolio en colores ocres y rojizos con poca afluencia. El verano es fresco en el bosque pero debe evitarse la franja horaria 12–16 horas. El invierno puede darse la posibilidad de ver cristalizaciones de hielo, aunque las sendas son más resbaladizas.',
      },
      {
        q: '¿Existen aseos y servicios de WC públicos en las cercanías?',
        a: 'Sí. El Ayuntamiento de Frías mantiene un bloque de aseos públicos (incluyendo un aseo adaptado para personas con movilidad reducida) dentro del Área Recreativa de Tobera. Horario: coincide con el horario del Área Recreativa. Fuera de ese horario, los servicios más cercanos son los de la Oficina de Turismo de Frías y los de los establecimientos de hostelería de Frías centro (a 8 km). La base de la cascada y los senderos NO cuentan con aseos, así que recomendamos visitar los servicios del Área Recreativa antes de comenzar la ruta SL-BU 17.',
      },
      {
        q: '¿Hay aparcamiento público cercano y cuánto cuesta?',
        a: 'Existen dos áreas de estacionamiento gestionadas directamente por el Ayuntamiento de Frías, ambas GRATUITAS y sin servicio de vigilancia: 1) Área Recreativa de Tobera: ~70 plazas, de acceso cómodo, ubicada a 400 metros del mirador superior (caminata de 6 minutos). 2) Zona inmediata de acceso: ~25 plazas, reservadas a personas con movilidad reducida y servicios de emergencia. Los fines de semana entre las 11:00 y las 17:00 de marzo a octubre el acceso vehicular inmediato suele cerrarse; en ese caso solo se puede utilizar el Área Recreativa.',
      },
      {
        q: '¿Qué opciones de restauración y alojamiento existen cerca? (sin recomendación comercial)',
        a: 'Como sitio web independiente sin ánimo de lucro, no recomendamos comercios ni establecimientos concretos, pero informamos sobre los TIPOS de servicios existentes en la zona según distancias de referencia: a) HOSTELERÍA RURAL — En un radio de 5 a 15 km (Frías, Tobera pedanía, Orbiso, Velilla) existe oferta variada de: 1) Restaurantes familiares cocina tradicional castellana; 2) Bares con pinchos y raciones en horario de abierto; 3) Panaderías y pastelerías locales. b) ALOJAMIENTO — Los tipos predominantes en el municipio de Frías y pedanías colindantes son: 1) Casas rurales de alquiler íntegro; 2) Habitaciones en alojamientos turísticos de alquiler turístico vivienda; 3) Camping y áreas de autocaravanas reguladas (no en el paraje protegido); 4) Pequeños hoteles históricos en el casco de Frías. Recomendamos verificar disponibilidad en plataformas oficiales de búsqueda y validar opiniones verificadas de huéspedes antes de reservar.',
      },
      {
        q: '¿Hay supermercados, tiendas o suministros en las cercanías?',
        a: 'Como sitio neutral, solo informamos sobre las CATEGORÍAS de comercio que existen en la zona: a) COMERCIOS DE ABASTECIMIENTO — La localidad más cercana con oferta de supermercados, fruterías y tiendas de alimentación general es Frías (a 8 km del paraje). Cuenta con supermercado de la zona, panaderías, carnicerías y pescaderías tradicionales, así como tiendas de ultramarinos. b) FARMACIAS — Frías cuenta con una farmacia abierta todos los días en horario comercial y servicio de guardia nocturna. En Tobera no existe farmacia. c) TIENDAS DE ARTESANÍA — El casco histórico de Frías cuenta con tiendas de productos típicos (quesos de Burgos, dulces de la Merindades, miel del valle del Ebro, vinos de Ribera del Duero).',
      },
      {
        q: '¿Hay estaciones de servicio y puntos de carga para vehículos eléctricos cerca?',
        a: 'Informamos sobre las CATEGORÍAS y ubicaciones geográficas aproximadas sin especificar operadoras: a) ESTACIONES DE SERVICIO (combustible convencional — gasolina 95, diésel) — La estación más cercana se encuentra en la localidad de Briviesca (~24 km al sur, dirección Burgos) y en Frías existe una estación de servicio con horario extendido. b) PUNTOS DE RECARGA VE ELÉCTRICA — En la actualidad (2026) la red de recarga rápida en la comarca de Las Merindades está en expansión; el casco histórico de Frías cuenta con un punto de recarga semi-rápida de titularidad municipal en el parking público cercano al Puente Viejo. Se recomienda planificar la recarga antes de desplazarse, ya que en el área de la Cascada de Tobera no existen puntos de carga.',
      },
      {
        q: '¿Se puede acceder con silla de ruedas? ¿Es apto para familias con niños y coches de bebé?',
        a: 'El grado de accesibilidad global es MODERADO (Grado 2). El Mirador Superior (1,8 km desde el Área Recreativa) se alcanza por un tramo de camino compactado de hormigón en buen estado y es ACCESIBLE en silla de ruedas (pendiente media 6 %, rampas sin barrera arquitectónica). El sendero SL-BU 17 hacia la base inferior NO ES APTO para sillas de ruedas ni coches de bebé, por existir tramos rocosos y escalones naturales. Familias con carritos de bebé pueden dejar el carro en el Área Recreativa y portear al niño/a en mochila porta-bebés. Existe aseo adaptado y plazas de parking P.M.R. en el Área Recreativa.',
      },
      {
        q: '¿Se pueden llevar animales de compañía (perros) a la Cascada de Tobera?',
        a: 'Sí. Los perros y demás animales domésticos son BIENVENIDOS, SIEMPRE QUE: 1) Vayan atados con correa en TODOS los senderos y miradores (correa máximo 2 m, recomendable 1,5 m). 2) No se dejen sueltos en ningún caso, para evitar disturbar a las especies silvestres y posibles enfrentamientos con perros pastores del valle. 3) Recojamos incondicionalmente sus excrementos (hay papeleras específicas en el Área Recreativa) y eliminemos correctamente los residuos de los mismos como residuo sólido urbano (NO arrojar excrementos al río ni enterrar en el bosque). 4) No se permite la entrada a perros en las zonas de aguas someras de las pozas en época de reproducción de la fauna acuática (marzo-junio).',
      },
      {
        q: '¿Se puede bañar o hacer picnic y barbacoa? ¿Se permite el fuego?',
        a: '1) BAÑO — Por razones de protección ecológica del cangrejo de río autóctono (especie protegida) y por riesgo de crecidas súbitas del río, NO SE PERMITE la introducción de personas en las pozas de la base del salto. 2) PICNIC — Se permite ÚNICAMENTE en el Área Recreativa municipal de Tobera, usando sus mesas y bancos designados (no en senderos, miradores o cauces). 3) FUEGO, BARBACOAS Y COCINAS PORTÁTILES — SE ENCUENTRAN PROHIBIDOS ABSOLUTAMENTE EN TODO EL PERÍMETRO DEL ESPACIO PROTEGIDO por normativa de prevención de incendios forestales (Ley 5/2002 de Prevención y Lucha Contra Incendios Forestales de Castilla y León). La cocción de alimentos solo está permitida en establecimientos de hostelería autorizados fuera del paraje.',
      },
    ],
  },
  en: {
    ogLocale: 'en_US',
    htmlLang: 'en',
    countryName: COUNTRY_NAME_EN,
    metaTitle: 'Cascada de Tobera (Tobera) - Visitor Guide & Location',
    metaDescription: `Discover ${ATTRACTION_FULL_NAME}, the iconic travertine natural monument in ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME_EN}. View location map, opening details, visitor services, nearby ${NEARBY_LANDMARK_1_EN}, and Leave No Trace travel tips for Las Merindades.`,
    ogTitle: `Cascada de Tobera - ${CITY_NAME}, ${STATE_PROVINCE} Travel Guide`,
    ogDescription: `Official visitor guide to ${ATTRACTION_FULL_NAME} in ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME_EN}. Natura 2000 (ES4120017) protected flora & fauna, access & geology.`,
    nearby1: NEARBY_LANDMARK_1_EN,
    nearby2: NEARBY_LANDMARK_2_EN,
    faq: [
      {
        q: 'Where exactly is Cascada de Tobera located?',
        a: 'Cascada de Tobera is located in the hamlet of Tobera, municipality of Frías, county of Las Merindades, province of Burgos, Autonomous Community of Castilla y León, Kingdom of Spain. Its official postal address is C. San Vicente, 2, 09211 Tobera, Burgos, Spain. Geographic coordinates: 42.7500214 N, -3.3049858 W. Approximate altitude 635 m a.s.l.',
      },
      {
        q: 'Is the visit to Cascada de Tobera free?',
        a: 'Yes. Cascada de Tobera is a public natural space and access is completely free of charge throughout the year, 24 hours a day. There is no ticket office, no mandatory reservation, and no paid parking within the perimeter. The municipal Recreational Area does have seasonal opening hours (April–October 7 a.m. to 9:30 p.m.), but the natural site of the waterfall remains open.',
      },
      {
        q: 'What is the best season of the year to visit it?',
        a: 'Each season has its charm. Spring (March–June) is recommended for its high water discharge after winter rains and snowmelt, and for the flowering of wild orchids along the banks. Autumn (September–November) offers a deciduous forest landscape in ochre and crimson tones with few crowds. Summer is cool in the forest but the 12–4 pm time band should be avoided. Winter can offer the possibility of seeing ice crystal formations, although the trails are more slippery.',
      },
      {
        q: 'Are there public toilets or WC facilities nearby?',
        a: 'Yes. The Frías Town Council maintains a public toilet block (including an accessible restroom for persons with reduced mobility) within the Tobera Recreational Area. Hours: coincides with the Recreational Area hours. Outside those hours, the nearest services are those of the Frías Tourist Office and of the hospitality establishments in central Frías (8 km away). The base of the waterfall and the trails have NO toilets; we recommend using the Recreational Area facilities before starting the SL-BU 17 trail.',
      },
      {
        q: 'Is there public parking nearby and how much does it cost?',
        a: 'There are two parking areas managed directly by the Frías Town Council, both FREE and without a surveillance service: 1) Tobera Recreational Area: ~70 spaces, comfortably accessed, located 400 meters from the upper viewpoint (6-minute walk). 2) Immediate access zone: ~25 spaces, reserved for persons with reduced mobility and emergency services. On weekends between 11:00 a.m. and 5:00 p.m. from March to October the immediate vehicle access is usually closed; in that case only the Recreational Area can be used.',
      },
      {
        q: 'What dining and lodging options exist nearby? (no commercial endorsement)',
        a: 'As an independent non-profit website we do not recommend specific commercial establishments, but we do inform on the TYPES of services available in the area by reference distances: a) RURAL HOSPITALITY — Within a 5 to 15 km radius (Frías, Tobera hamlet, Orbiso, Velilla) there is a varied offer of: 1) Traditional Castilian family restaurants; 2) Pincho and raciones bars during opening hours; 3) Local bakeries and patisseries. b) LODGING — The predominant types in the Frías municipality and neighboring hamlets are: 1) Entire-house self-catering cottages; 2) Rooms in rural guesthouses or private-vacation homes; 3) Regulated campsites and camper van areas (outside the protected site); 4) Small historic hotels in the Frías old town. We recommend verifying availability on official search platforms and validating verified guest reviews before booking.',
      },
      {
        q: 'Are there supermarkets, shops or supplies nearby?',
        a: 'As a neutral site we only report on the CATEGORIES of commerce existing in the area: a) RETAIL SUPPLY — The nearest locality with supermarkets, greengrocers and general food stores is Frías (8 km from the site). It has a regional supermarket, bakeries, traditional butchers and fishmongers, as well as convenience stores. b) PHARMACIES — Frías has one pharmacy open every day during commercial hours plus a night/weekend on-call rota service. There is no pharmacy in Tobera hamlet. c) CRAFT SHOPS — The historic center of Frías offers shops with typical products (Burgos cheeses, Merindades pastries, Ebro valley honey, Ribera del Duero wines).',
      },
      {
        q: 'Are there petrol stations and EV charging points nearby?',
        a: 'We inform on the CATEGORIES and approximate geographical locations without naming operators: a) PETROL STATIONS (conventional fuels — 95 unleaded, diesel) — The nearest station is in the town of Briviesca (~24 km south, toward Burgos) and Frías also has a filling station with extended hours. b) EV CHARGING POINTS — As of 2026 the fast-charging network in the Las Merindades county is expanding; Frías old town has one semi-fast (11 kW) municipal point at the public parking lot near the Old Bridge. It is advisable to plan charging before traveling, as there are no EV charging points at Cascada de Tobera or in its immediate vicinity.',
      },
      {
        q: 'Is it wheelchair-accessible? Is it suitable for families with toddlers and strollers?',
        a: 'The overall accessibility grade is MODERATE (Grade 2). The Upper Viewpoint (1.8 km from the Recreational Area) is reached via a well-maintained compact concrete road and is WHEELCHAIR-ACCESSIBLE (average slope 6%, ramps without architectural barriers). The SL-BU 17 trail toward the lower base is NOT SUITABLE for wheelchairs or strollers, as it has rocky sections and natural steps. Families with strollers can leave them at the Recreational Area and carry the baby/ toddler in a baby carrier backpack. There is an accessible toilet and PRM parking spaces in the Recreational Area.',
      },
      {
        q: 'Can we bring companion animals (dogs) to Cascada de Tobera?',
        a: 'Yes. Dogs and other domestic pets are WELCOME, PROVIDED THAT: 1) They remain on a leash at ALL times on trails and viewpoints (maximum leash length 2 m; recommended 1.5 m). 2) They are never allowed off-leash, so as not to disturb wild species or potentially conflict with valley shepherd dogs. 3) Owners always collect their droppings (there are specific litter bins in the Recreational Area) and dispose of them correctly as municipal solid waste (DO NOT throw excrement into the river or bury it in the woods). 4) Dogs are not allowed to enter the shallow pool areas during the aquatic fauna breeding period (March–June).',
      },
      {
        q: 'Can people swim or have picnics and barbecues? Is fire allowed?',
        a: '1) SWIMMING — For ecological protection of the native white-clawed crayfish (protected species) and due to the risk of sudden river floods, people are NOT ALLOWED to enter the pools at the base of the waterfall. 2) PICNICS — Only permitted at the Tobera municipal Recreational Area, using its designated tables and benches (not on trails, viewpoints or riverbeds). 3) FIRE, BARBECUES AND PORTABLE STOVES — ABSOLUTELY PROHIBITED THROUGHOUT THE ENTIRE PROTECTED PERIMETER under the Forest Fire Prevention regulations (Law 5/2002 on Forest Fire Prevention and Control of Castilla y León). Cooking is only allowed in authorized hospitality establishments outside the site.',
      },
    ],
  },
  zh: {
    ogLocale: 'zh_CN',
    htmlLang: 'zh-CN',
    countryName: COUNTRY_NAME_ZH,
    metaTitle: '托贝拉瀑布 Cascada de Tobera（Tobera）- 游客指南与地理位置',
    metaDescription: `深入探索${ATTRACTION_FULL_NAME}——位于${COUNTRY_NAME_ZH}${STATE_REGION}自治区${STATE_PROVINCE}省${CITY_NAME}村的标志性钙华（石灰华）天然纪念碑。查看精确位置地图、开放时段、访客服务设施、周边${NEARBY_LANDMARK_1_ZH}地质峡谷与${NEARBY_LANDMARK_2_ZH}中世纪六孔古桥，以及无痕山林 LNT 徒步建议。`,
    ogTitle: '托贝拉瀑布 Cascada de Tobera — 布尔戈斯托贝拉专业科普指南',
    ogDescription: `Cascada de Tobera（托贝拉瀑布）官方访客指南 · ${COUNTRY_NAME_ZH} ${STATE_REGION} ${STATE_PROVINCE} ${CITY_NAME} · Natura 2000 双认证（ES4120017）· 侏罗系活态钙华地质现场 · 水磨群 BIC 民族志遗产。`,
    nearby1: NEARBY_LANDMARK_1_ZH,
    nearby2: NEARBY_LANDMARK_2_ZH,
    faq: [
      {
        q: '1. 托贝拉瀑布 Cascada de Tobera 具体位置在哪里？',
        a: '精确地址为：C. San Vicente, 2, 09211 Tobera, Burgos, Castilla y León, España（西班牙王国 卡斯蒂利亚-莱昂自治区 布尔戈斯省 弗里亚斯市 托贝拉行政村）。地理坐标：北纬 42.7500214°，西经 -3.3049858°，平均海拔 635 米。',
      },
      {
        q: '2. 参观 Cascada de Tobera 是否需要买票？多少钱？',
        a: '完全免费。作为公共自然遗产开放空间，全年 24 小时无门票、无强制预约、无商业收费停车场。仅公共休闲区（野餐桌 + WC + 主停车场）按季节有时段限制（4–10 月 07–21:30；11–3 月 08–19:00），但自然景区本体仍可任何时段进入。',
      },
      {
        q: '3. 一年之中最推荐的参观季节是几月？',
        a: '各有千秋。3–6 月春季因融雪+春雨水量最大，野生兰花盛开也在这一阶段，是综合景观最佳期。9–11 月秋季的落叶林色彩最富层次，且游客最少。夏季阴凉但正午暴晒宜避。冬季偶有边缘冰棱且步道最滑，但音景最静。',
      },
      {
        q: '4. 附近有无公共卫生间（WC）与无障碍卫生间？',
        a: '有。Frías 市政府在入口 400 米处『托贝拉公共休闲区』内设有一组公共卫生间，含一间轮椅无障碍洗手间，开放时间与休闲区一致（季节分段）。超出时段则最近的 WC 在 Frías 老城区旅游局与餐饮商户（约 8 km）。瀑布本体及沿途 SL-BU 17 / 18 步道上均不设 WC，务必在休闲区先使用后再启程！',
      },
      {
        q: '5. 停车场有几个？是否收费？周末会不会满？',
        a: '两处公共市政停车场皆【完全免费】：① 休闲区主停车场（约 70 普通车位 + 残障车位）；② 近瀑布临时区（约 25 车位，只给残障人士和公务应急）。3–10 月周末 11:00–17:00 经常临时关闭近瀑区以减轻生态压力，此时只能停休闲区主场——建议早 09:00 前抵达或改为步行/自行车方式。',
      },
      {
        q: '6. 周边有哪些类型的餐饮与住宿？（本站中立原则，不推荐具体商户）',
        a: '作为非盈利公益科普网站我们不推荐具体商业名称，但会客观说明本区域的【服务类型构成】供您自行选择：（A）餐饮类 5–15 km 范围：① 家庭式卡斯蒂利亚传统菜馆；② 塔帕斯/Pinchos 与 raciones 小食酒馆；③ 乡村食堂（午市套餐）；④ 面包/甜点店与季节性冰淇淋店。（B）住宿类 5–20 km：① 整栋乡村度假屋（Casa rural）；② 民宿式卧室客房（Posada / Hospedería rural）；③ 2–4 星级小型历史酒店（老城区）；④ 合规的露营地/房车停靠区（严禁在保护区内随意宿营）；⑤ 青年旅馆或朝圣者庇护所。选择前请核验经营执照与真实住户评价。',
      },
      {
        q: '7. 有没有超市、药店、百货购物之类的日常补给？',
        a: '按类型分述（不点名具体商业）：【食品与日常】最近的带超市的城镇是 Frías（向西南 8 km），有综合超市、面包店、传统肉店鱼店、小型杂货铺；Tobera 本村只有一间有限时的便民小店，不建议依赖。【药店】Frías 老城区 1 家带夜间/周末轮值药房；Tobera 无。【地方特色文创/食品】Frías 老城区有多家布尔戈斯奶酪、Merindades 甜点、埃布罗河谷蜂蜜、杜罗河岸葡萄酒等产品的手信店。',
      },
      {
        q: '8. 燃油加油站与电动汽车充电桩分布如何？（中立概述）',
        a: '仅提供【分类与大致距离】：（1）燃油（95/98 汽油、柴油、农用柴油）——向西南 24 km 的 Briviesca 镇有全服务型加油站，Frías 镇内也有一家延长营业型加油点。（2）电动汽车充电——截至 2026 年本区域快充网络仍在扩展：Frías 老城区 Puente Viejo 停车场有市政 11 kW 中速桩；最近 50 kW+ 快充桩位于 Briviesca。Cascada de Tobera 与 Tobera 村目前没有任何充电设施，出发前必须做好充电路线规划。',
      },
      {
        q: '9. 轮椅使用者和带婴儿车的家庭能去吗？',
        a: '【综合可达性 2 级（中度）】：① 上游观景台（1.8 km）有平整的硬化混凝土路、坡道斜率约 6%，无障碍设计良好，轮椅 + 小型儿童推车可以到达；② SL-BU 17 的下半段去瀑布底是天然岩石 + 原生石阶，轮椅、婴儿车都不适用，建议改用婴儿背架、将推车停在休闲区；③ 休闲区公共洗手间配备无障碍隔间 + 2 个残疾人专用车位。详细请联系 Frías 市政旅游局获取最新《可达性手册》。',
      },
      {
        q: '10. 可以带狗（宠物）进入 Cascada de Tobera 吗？',
        a: '可以，但必须严格遵守以下四条：① 所有步道、观景点全程 1.5–2 米短绳牵引（绝对禁止散放，防止惊扰野生物种或与护羊犬冲突）；② 主人必须负责清理排泄物，休闲区设有专门宠物垃圾袋投放点——粪便一律带回做城市垃圾处理，绝不可投入河里或就地掩埋；③ 3–6 月水生生物繁殖季期间，狗不得进入瀑布下池任何浅水区；④ 遇到牧场与护羊犬时请绕道。',
      },
      {
        q: '11. 游客可以下水游泳、野餐、生火烧烤吗？',
        a: '分三条：① 【游泳】——因受保护原生白爪小龙虾（国际极危物种）与突发山洪风险，瀑布池区禁止任何人下水；② 【野餐】——仅允许在【托贝拉公共休闲区】已有的野餐桌上进行，不能把食物带到步道、观景点或河床上；③ 【明火与烧烤】——依据卡斯蒂利亚-莱昂第 5/2002 号森林防火法，本保护区半径内绝对禁止炭火、燃气炉、酒精炉、烟火爆竹等一切形式的火源（包含香烟、雪茄、无人机飞行），违者将面临 600 至 60 000 欧元的行政处罚，严重的移送司法。需要烹调请前往 Frías 正规餐饮商家。',
      },
    ],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = LOCALE_DATA[locale] || LOCALE_DATA.es;
  const baseUrl = `https://${DOMAIN_NAME}`;

  const esUrl = `${baseUrl}/es`;
  const enUrl = `${baseUrl}/en`;
  const zhUrl = `${baseUrl}/zh`;
  const selfUrl =
    locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  return {
    metadataBase: new URL(baseUrl),
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: selfUrl,
      languages: {
        es: esUrl,
        en: enUrl,
        zh: zhUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: selfUrl,
      siteName: ATTRACTION_FULL_NAME,
      locale: data.ogLocale,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE_URL,
          alt: `${ATTRACTION_FULL_NAME} in ${CITY_NAME}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
      images: [HERO_IMAGE_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function TouristAttractionJsonLd({ locale }: { locale: string }) {
  const d = LOCALE_DATA[locale] || LOCALE_DATA.es;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `https://${DOMAIN_NAME}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [
      ATTRACTION_SHORT_NAME,
      `${CITY_NAME} ${ATTRACTION_FULL_NAME}`,
      `${STATE_PROVINCE} ${ATTRACTION_FULL_NAME}`,
      '托贝拉瀑布 Cascada de Tobera',
      'Cascada de Tobera (Tobera, Burgos)',
    ],
    description: d.metaDescription,
    url: `https://${DOMAIN_NAME}`,
    image: [
      {
        '@type': 'ImageObject',
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        description: `${ATTRACTION_FULL_NAME} - Main view in ${CITY_NAME}, ${d.countryName}`,
      },
    ],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C. San Vicente, 2',
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      addressRegionFull: STATE_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    additionalType: 'Natural Monument',
    sameAs: [
      MAPS_SHARE_URL,
      GOVT_TOURISM_URL,
      'https://www.turismocastillayleon.com/',
      'https://patrimonionatural.org/',
      'https://ec.europa.eu/environment/nature/natura2000/',
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FAQJsonLd({ locale }: { locale: string }) {
  const d = LOCALE_DATA[locale] || LOCALE_DATA.es;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const data = LOCALE_DATA[locale] || LOCALE_DATA.es;

  return (
    <html lang={data.htmlLang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <TouristAttractionJsonLd locale={locale} />
        <FAQJsonLd locale={locale} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
