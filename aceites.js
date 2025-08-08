
// Datos completos de aceites esenciales
const datos = {
  uso: [
    { nombre: "Dormir/ Insomnio",
      aceites: ["Lavender", "Roman Chamomile", "Vetiver", "Cedarwood", "Serenity Blend"],
      descripcion: "Aromático en difusor (3–5 gotas) antes de dormir o tópico en sienes y planta de pies (diluido).",
      pasos: [
        "Difundir 3-5 gotas de Lavender o Vetiver en la habitación 30 minutos antes de dormir.",
        "Aplicar tópico diluido en sienes y planta de pies.",
        "Realizar respiración profunda y relajación consciente."
      ]
    },
    { nombre: "Estrés / Ansiedad",
      aceites: ["Adaptiv", "Copaiba", "Ylang Ylang", "Frankincense", "Lavender", "Bergamot"],
      descripcion: "Inhalación directa o difusor. Aplicar diluido en muñecas o cuello.",
      pasos: [
        "Inhalar directamente Adaptiv o Ylang Ylang durante 2-3 minutos.",
        "Aplicar tópicamente en muñecas y cuello con aceite portador.",
        "Practicar meditación guiada o mindfulness mientras se difunde."
      ]
    },
    { nombre: "Inmunidad",
      aceites: ["On Guard", "Lemon", "Frankincense"],
      descripcion: "1–2 gotas en cápsula vegetal o difusor. Aplicación tópica en planta de pies.",
      pasos: [
        "Difundir On Guard en espacios comunes varias veces al día.",
        "Tomar 1-2 gotas en cápsula vegetal (consultar especialista).",
        "Aplicar tópicamente en planta de pies y pecho."
      ]
    },
    { nombre: "Dolor muscular/ Inflamación",
      aceites: ["Deep Blue", "Peppermint", "Wintergreen", "Copaiba", "Frankincense", "Marjoram"],
      descripcion: "Masaje tópico en zona afectada, diluido en aceite base.",
      pasos: [
        "Diluir Deep Blue o Wintergreen en aceite portador.",
        "Aplicar masajeando profundamente en zona afectada.",
        "Repetir mañana y noche si es necesario."
      ]
    },
    { nombre: "Problemas digestivos",
      aceites: ["DigestZen", "Peppermint", "Fennel"],
      descripcion: "Aplicación abdominal o en cápsula vegetal (uso interno con guía profesional).",
      pasos: [
        "Aplicar DigestZen diluido sobre el abdomen en movimientos circulares.",
        "Inhalar Peppermint para aliviar náuseas.",
        "Tomar 1 gota de Fennel en agua tibia (opcional, consultar especialista)."
      ]
    },
    { nombre: "Falta de energía",
      aceites: ["Peppermint", "Wild Orange", "Citrus Bliss"],
      descripcion: "Inhalación directa o en difusor por la mañana. Aplicar diluido en nuca.",
      pasos: [
        "Inhalar Peppermint o Wild Orange al despertar.",
        "Aplicar diluido en nuca y sienes.",
        "Realizar actividad física suave para activar la circulación."
      ]
    },
    { nombre: "Concentración / Estudio",
      aceites: ["Peppermint", "Rosemary", "Frankincense"],
      descripcion: "Difundir durante el estudio o aplicar en sienes y nuca.",
      pasos: [
        "Difundir Peppermint o Rosemary en la habitación.",
        "Aplicar en sienes antes de comenzar el estudio.",
        "Hacer pausas cada 30 min para inhalar y relajar."
      ]
    },
    { nombre: "Meditación",
      aceites: ["Frankincense", "Sandalwood", "Myrrh"],
      descripcion: "Difundir antes de la meditación o aplicar en tercer ojo/corona.",
      pasos: [
        "Inhalar Frankincense antes de la meditación.",
        "Aplicar Sandalwood diluido en tercer ojo y coronilla.",
        "Crear un ritual con respiración consciente."
      ]
    },
    { nombre: "Sistema respiratorio/ Congestión",
      aceites: ["Air Blend", "Eucalyptus", "Peppermint", "Breathe Blend", "Cardamom", "Tea Tree"],
      descripcion: "Inhalación directa o en difusor. Tópico en pecho y espalda.",
      pasos: [
        "Difundir Air Blend por la noche.",
        "Aplicar en pecho y espalda antes de dormir.",
        "Realizar vaporizaciones con agua caliente y Eucalyptus."
      ]
    },
    { nombre: "Desintoxicación / Detox",
      aceites: ["Lemon", "Zendocrine", "Ginger"],
      descripcion: "Tomar en agua (si es apto) o aplicar en abdomen e hígado.",
      pasos: [
        "Tomar 1 gota de Lemon en agua por la mañana.",
        "Aplicar Zendocrine en la zona del hígado con aceite portador.",
        "Masajear el abdomen en círculos con Ginger diluido."
      ]
    },
    { nombre: "Cambios hormonales/ Ciclo",
      aceites: ["Clary Calm", "Geranium", "Clary Sage", "Whisper Blend", "Ylang Ylang"],
      descripcion: "Aplicar en abdomen, muñecas o difundir según el momento del ciclo.",
      pasos: [
        "Aplicar Clary Calm en bajo vientre mañana y noche.",
        "Difundir Geranium para equilibrar emociones.",
        "Masajear con Clary Sage durante el síndrome premenstrual."
      ]
    },
    { nombre: "Dolor de cabeza",
      aceites: ["Peppermint", "Frankincense", "PastTense  Blend"],
      descripcion: "Aplicar en sienes, nuca o inhalar directamente.",
      pasos: [
        "Aplicar Peppermint diluido en sienes y nuca.",
        "Inhalar PastTense por 2-3 minutos.",
        "Descansar en ambiente oscuro y tranquilo."
      ]
    },
    { nombre: "Equilibrio emocional",
      aceites: ["Balance", "Frankincense", "Bergamot"],
      descripcion: "Aplicar en corazón, nuca y difundir durante el día.",
      pasos: [
        "Aplicar Balance en plantas de los pies por la mañana.",
        "Inhalar Bergamot durante momentos de inestabilidad emocional.",
        "Difundir Frankincense al final del día."
      ]
    },
    { nombre: "Autoestima / Confianza",
      aceites: ["Bergamot", "Cedarwood", "Wild Orange"],
      descripcion: "Uso diario en afirmaciones positivas y rutinas de autocuidado.",
      pasos: [
        "Aplicar Bergamot y decir afirmaciones positivas frente al espejo.",
        "Inhalar Wild Orange antes de presentaciones o eventos importantes.",
        "Masajear el pecho con Cedarwood en la noche."
      ]
    },
    { nombre: "Sistema linfático",
      aceites: ["Grapefruit", "Juniper Berry", "Cypress"],
      descripcion: "Masajes ascendentes y drenaje linfático con aceite portador.",
      pasos: [
        "Aplicar Grapefruit diluido con movimientos ascendentes en piernas.",
        "Masajear axilas y cuello con Cypress.",
        "Inhalar Juniper Berry por la mañana."
      ]
    },
    { nombre: "Afrodisíaco / Libido",
      aceites: ["Ylang Ylang", "Patchouli", "Sandalwood"],
      descripcion: "Difundir en la habitación o aplicar en cuello, muñecas y pecho.",
      pasos: [
        "Difundir Ylang Ylang al final del día.",
        "Aplicar Sandalwood en zonas erógenas (diluido).",
        "Crear un ambiente relajante con Patchouli."
      ]
    },
    { nombre: "Circulación",
      aceites: ["Cypress", "Marjoram", "Black Pepper"],
      descripcion: "Masaje en piernas, pies y manos. Inhalación estimulante.",
      pasos: [
        "Masajear con Cypress desde pies hacia arriba.",
        "Aplicar Black Pepper en zonas frías del cuerpo.",
        "Hacer caminatas breves después de aplicación."
      ]
    },
    { nombre: "Protección energética",
      aceites: ["Frankincense", "White Fir", "Melissa"],
      descripcion: "Rituales de limpieza, visualización y aplicación tópica protectora.",
      pasos: [
        "Aplicar Melissa en coronilla antes de salir de casa.",
        "Crear spray con White Fir para el entorno.",
        "Inhalar Frankincense al cerrar círculos energéticos."
      ]
    },
    { nombre: "Tristeza profunda / Duelo",
      aceites: ["Console", "Frankincense", "Rose"],
      descripcion: "Inhalación diaria, aplicación en corazón y acompañamiento emocional.",
      pasos: [
        "Aplicar Console en el pecho y muñecas cada mañana.",
        "Inhalar Rose en silencio o meditación guiada.",
        "Usar Frankincense en rituales de cierre emocional."
      ]
    },
    { nombre: "Creatividad / Inspiración",
      aceites: ["Citrus Bliss", "InTune", "Lime"],
      descripcion: "Difundir al iniciar proyectos o escribir. Aplicar en tercer ojo.",
      pasos: [
        "Inhalar Citrus Bliss profundamente antes de trabajar.",
        "Aplicar InTune diluido en la frente y muñecas.",
        "Difundir Lime en sesiones creativas."
      ]
    },
    { nombre: "Concentración/ Memoria",
      aceites: ["Peppermint", "Rosemary", "InTune Blend", "Basil", "Lemon"],
      descripcion: "Inhalación diaria, aplicación en muñecas y respiración consciente.",
      pasos: [
        "Inhalar Peppermint en respiración consciente.",
        "Aplicar Rosemary diluido en muñecas.",
        "Inhalar InTune Blend profundamente."
      ]
    },
    { nombre: " Ira / Irritabilidad",
      aceites: ["Frankincense", "Balance Blend", "Bergamot", "Patchouli"],
      descripcion: "Inhalación diaria, aplicación en muñecas y respiración consciente.",
      pasos: [
        "Inhalar Lavender profundamente.",
      ]
    },
    {
      nombre: "Alergias estacionales",
      aceites: ["Lavender + Lemon + Peppermint (Trío base)", "Breathe Blend"],
      descripcion: "Combinación natural para aliviar síntomas de alergia, despejar vías respiratorias y reducir inflamación.",
      pasos: [
        "Aplicar 1 gota de cada aceite (Lavender, Lemon, Peppermint) en las palmas, inhalar profundamente.",
        "Diluir y aplicar en pecho y planta de los pies, mañana y noche.",
        "Usar Breathe en difusor por 30 min al despertar y antes de dormir."
      ]
    },
    {
      nombre: "Sistema inmune",
      aceites: ["On Guard Blend", "Orégano + Frankincense + Lemon + Tea Tree (Melaleuca)"],
      descripcion: "Apoyo inmunológico para prevención o durante infecciones leves. Fortalece defensas naturales.",
      pasos: [
        "Aplicar On Guard diluido en planta de pies al despertar.",
        "Tomar 1 gota de Lemon y Frankincense en agua tibia (uso interno opcional).",
        "En caso de síntomas: aplicar mezcla diluida de Orégano + Tea Tree + Frankincense en columna."
      ]
    },
    {
      nombre: "Digestión / Náuseas",
      aceites: ["DigestZen Blend", "Ginger", "Fennel", "Peppermint", "Coriander"],
      descripcion: "Alivio digestivo, náuseas, hinchazón y malestares estomacales. Equilibra y calma.",
      pasos: [
        "Masajear DigestZen diluido en abdomen con movimientos circulares.",
        "Agregar 1 gota de Ginger en agua tibia antes de comidas pesadas.",
        "Frotar Peppermint en nuca para refrescar y calmar náuseas."
      ]
    },
    {
      nombre: "Gripe / Resfriado común",
      aceites: ["On Guard Blend", "Oregano", "Lemon", "Eucalyptus", "Frankincense"],
      descripcion: "Apoyo respiratorio y antiviral durante gripes, resfriados o congestión.",
      pasos: [
        "Usar On Guard y Eucalyptus en difusor 2-3 veces al día.",
        "Aplicar mezcla diluida de Oregano y Lemon en columna y planta de pies.",
        "Inhalar Eucalyptus o Lemon desde las palmas para aliviar congestión nasal."
      ]
    },
    {
      nombre: "Corazón abierto / amor propio",
      aceites: ["Rose", "Geranium", "Jasmine", "Ylang Ylang"],
      descripcion: "Apoyo emocional para fomentar el amor propio, aceptación y conexión interna.",
      pasos: [
        "Aplicar Rose o Geranium sobre el corazón y muñecas.",
        "Usar Jasmine o Ylang Ylang en difusor durante meditación o journaling.",
        "Masajear con mezcla diluida en pecho y espalda alta por la mañana."
      ]
    },
    {
      nombre: "Energía / Vitalidad",
      aceites: ["Peppermint", "Wild Orange", "Citrus Bliss Blend", "Grapefruit"],
      descripcion: "Revitalización física y mental. Aumenta motivación y estado de alerta.",
      pasos: [
        "Inhalar Peppermint + Wild Orange desde palmas al despertar.",
        "Aplicar Citrus Bliss en muñecas y cuello durante el día.",
        "Usar Grapefruit en difusor por la mañana o al trabajar."
      ]
    },
    {
      nombre: "Limpieza / Purificación",
      aceites: ["Lemon", "Tea Tree", "Purify Blend", "Eucalyptus"],
      descripcion: "Desintoxicación ambiental y energética. Limpieza del aire y espacios.",
      pasos: [
        "Rociar mezcla con Purify y agua en superficies y ambientes.",
        "Agregar Lemon o Tea Tree al agua del baño para limpieza energética.",
        "Usar Eucalyptus en difusor por 30 min en espacios cerrados."
      ]
    },
    {
      nombre: "Repelente de insectos",
      aceites: ["TerraShield Blend", "Lemongrass", "Cedarwood", "Patchouli"],
      descripcion: "Protección natural contra insectos sin químicos tóxicos.",
      pasos: [
        "Aplicar TerraShield en piernas, brazos y cuello antes de salir.",
        "Diluir Lemongrass + Patchouli + Cedarwood en aceite base y rociar en ropa o mochilas.",
        "Colocar algunas gotas en difusor en terrazas o ventanas."
      ]
    },
    {
      nombre: "Cuidado de la piel",
      aceites: ["Lavender", "Frankincense", "Tea Tree", "Helichrysum", "Rose"],
      descripcion: "Regeneración, cicatrización y equilibrio de la piel. Ideal para rostro y zonas sensibles.",
      pasos: [
        "Agregar 1 gota de Lavender + Frankincense a la crema facial.",
        "Aplicar Tea Tree en imperfecciones localizadas.",
        "Usar Rose diluido como sérum nocturno en zonas del rostro."
      ]
    },
    {
      nombre: "Depresión leve / ánimo bajo",
      aceites: ["Citrus Bliss", "Wild Orange", "Bergamot", "Elevation Blend"],
      descripcion: "Elevación emocional, claridad mental y apertura al gozo diario.",
      pasos: [
        "Usar Citrus Bliss o Elevation en difusor al comenzar el día.",
        "Aplicar Wild Orange en muñecas y detrás de las orejas.",
        "Realizar respiración profunda con Bergamot desde palmas abiertas."
      ]
    },
    {
      nombre: "Salud bucal",
      aceites: ["Clove", "On Guard", "Myrrh", "Peppermint"],
      descripcion: "Cuidado natural de encías, dientes y aliento. Antiséptico y fortalecedor.",
      pasos: [
        "Enjuagar la boca con 1 gota de Peppermint + On Guard en agua (sin tragar).",
        "Aplicar Clove y Myrrh diluidos en encías con cotonito para fortalecerlas.",
        "Usar On Guard en pasta dental o agregar 1 gota al cepillado."
      ]
    }
],
    chakra: [
    {
      nombre: "🔴 Chakra Raíz (Muladhara)",
      aceites: ["Vetiver", "Cedarwood", "Patchouli"],
      descripcion: "Conexión a la tierra, seguridad, estabilidad. Frecuencia: ~396 Hz. Color: Rojo.",
      pasos: [
        "Aplicar Vetiver en planta de los pies cada mañana.",
        "Masajear zona baja de la espalda con Cedarwood diluido.",
        "Realizar visualización de raíces conectando al suelo con aroma de Patchouli."
      ]
    },
    {
      nombre: "🟠 Chakra Sacro (Svadhisthana)",
      aceites: ["Wild Orange", "Ylang Ylang", "Clary Sage"],
      descripcion: "Creatividad, sensualidad, fluidez. Frecuencia: ~417 Hz. Color: Naranja.",
      pasos: [
        "Aplicar Wild Orange diluido en vientre bajo antes de crear o bailar.",
        "Difundir Ylang Ylang al comenzar el día.",
        "Masajear con Clary Sage en círculos suaves por la noche."
      ]
    },
    {
      nombre: "🟡 Chakra Plexo Solar (Manipura)",
      aceites: ["Ginger", "Lemon", "Cinnamon"],
      descripcion: "Voluntad, autoestima, acción. Frecuencia: ~528 Hz. Color: Amarillo.",
      pasos: [
        "Masajear el abdomen con Ginger diluido en círculos.",
        "Tomar 1 gota de Lemon en agua al despertar (consultar especialista).",
        "Aplicar Cinnamon diluido en zona del ombligo con intención."
      ]
    },
    {
      nombre: "🟢 Chakra Corazón (Anahata)",
      aceites: ["Rose", "Bergamot", "Geranium"],
      descripcion: "Amor, compasión, perdón. Frecuencia: ~639 Hz. Color: Verde/Rosa.",
      pasos: [
        "Inhalar Rose profundamente en silencio.",
        "Aplicar Geranium diluido en el centro del pecho.",
        "Realizar afirmaciones de amor propio con Bergamot."
      ]
    },
    {
      nombre: "🔵 Chakra Garganta (Vishuddha)",
      aceites: ["Spearmint", "Lavender", "Roman Chamomile"],
      descripcion: "Comunicación, verdad, expresión. Frecuencia: ~741 Hz. Color: Azul claro.",
      pasos: [
        "Aplicar Spearmint diluido en la garganta antes de hablar en público.",
        "Difundir Lavender en momentos de expresión emocional.",
        "Usar Roman Chamomile en gargantas irritadas (tópico externo)."
      ]
    },
    {
      nombre: "🟣 Chakra Tercer Ojo (Ajna)",
      aceites: ["Frankincense", "Clary Sage", "Rosemary"],
      descripcion: "Intuición, visión interna, claridad. Frecuencia: ~852 Hz. Color: Índigo.",
      pasos: [
        "Aplicar Frankincense entre cejas en meditación.",
        "Difundir Clary Sage durante visualizaciones.",
        "Colocar una gota de Rosemary diluida en la frente (cuidado ojos)."
      ]
    },
    {
      nombre: "⚪ Chakra Corona (Sahasrara)",
      aceites: ["Sandalwood", "Frankincense", "Lavender"],
      descripcion: "Conexión espiritual, sabiduría, conciencia. Frecuencia: ~963 Hz. Color: Violeta/Dorado.",
      pasos: [
        "Aplicar Sandalwood en coronilla al despertar.",
        "Inhalar Frankincense antes de prácticas espirituales.",
        "Difundir Lavender para armonizar estados elevados."
      ]
    },
  ],
 emocion: [
    {
      nombre: "Miedo",
      aceites: ["Copaiba", "Frankincense", "Juniper Berry"],
      descripcion: "El miedo bloquea el movimiento. Estos aceites ayudan a recuperar el centro, protegerse y actuar con confianza.",
      pasos: [
        "Inhalar Copaiba durante momentos de inseguridad.",
        "Aplicar Frankincense diluido en la base del cuello.",
        "Difundir Juniper Berry por la noche para protección emocional."
      ]
    },
    {
      nombre: "Tristeza",
      aceites: ["Console", "Rose", "Melissa"],
      descripcion: "La tristeza profunda puede ser sostenida con aceites que nutren el alma y dan consuelo en los procesos de duelo.",
      pasos: [
        "Aplicar Console sobre el corazón.",
        "Inhalar Rose en sesiones de meditación o contemplación.",
        "Utilizar Melissa en coronilla en prácticas de sanación profunda."
      ]
    },
    {
      nombre: "Ansiedad",
      aceites: ["Adaptiv", "Lavender", "Ylang Ylang"],
      descripcion: "Estados de tensión o agitación que se calman con aromas dulces, florales o equilibrantes.",
      pasos: [
        "Inhalar Adaptiv profundamente durante 2 minutos.",
        "Aplicar Lavender en sienes y nuca.",
        "Masajear el pecho con Ylang Ylang diluido."
      ]
    },
    {
      nombre: "Enojo / Ira",
      aceites: ["Bergamot", "Roman Chamomile", "Geranium"],
      descripcion: "Cuando el enojo no se expresa de forma saludable, estos aceites ayudan a equilibrar la energía y canalizarla con amor.",
      pasos: [
        "Inhalar Bergamot antes de una conversación difícil.",
        "Aplicar Roman Chamomile en la frente y muñecas.",
        "Difundir Geranium para armonizar el espacio."
      ]
    },
    {
      nombre: "Falta de propósito",
      aceites: ["Frankincense", "Sandalwood", "Myrrh"],
      descripcion: "Para reconectar con el sentido profundo de vida, activar la espiritualidad y la inspiración interior.",
      pasos: [
        "Inhalar Sandalwood en momentos de reflexión.",
        "Aplicar Frankincense en el entrecejo y corazón.",
        "Usar Myrrh en rituales de conexión o escritura consciente."
      ]
    },
    {
      nombre: "Falta de motivación",
      aceites: ["Wild Orange", "Peppermint", "Motivate"],
      descripcion: "Para retomar el impulso creativo y la fuerza de voluntad.",
      pasos: [
        "Inhalar Motivate al comenzar el día.",
        "Aplicar Peppermint en nuca y sienes.",
        "Difundir Wild Orange mientras trabajas."
      ]
    },
    {
      nombre: "Culpa",
      aceites: ["Forgive", "Lime", "Lavender"],
      descripcion: "La culpa puede transformarse en aprendizaje cuando se acompaña con compasión y perdón.",
      pasos: [
        "Aplicar Forgive sobre el corazón.",
        "Inhalar Lime profundamente mientras repites afirmaciones de perdón.",
        "Usar Lavender antes de dormir para soltar cargas mentales."
      ]
    },
    {
      nombre: "Inseguridad",
      aceites: ["Cedarwood", "Vetiver", "Balance"],
      descripcion: "Estos aceites aportan firmeza interior, seguridad y presencia.",
      pasos: [
        "Aplicar Cedarwood en planta de pies por la mañana.",
        "Difundir Vetiver en espacios de trabajo o estudio.",
        "Inhalar Balance en momentos de duda."
      ]
    },
    {
      nombre: "Falta de concentración",
      aceites: ["InTune", "Rosemary", "Peppermint"],
      descripcion: "Favorecen la claridad mental y el enfoque sostenido.",
      pasos: [
        "Aplicar InTune en muñecas antes de estudiar.",
        "Difundir Rosemary y Peppermint durante sesiones de enfoque.",
        "Hacer pausas con inhalaciones conscientes."
      ]
    },
    {
      nombre: "Duelo / Pérdida",
      aceites: ["Console", "Rose", "Spikenard"],
      descripcion: "Para acompañar procesos de duelo con sostén emocional y espiritual.",
      pasos: [
        "Aplicar Console en pecho y espalda alta.",
        "Inhalar Rose cada mañana en silencio.",
        "Usar Spikenard en coronilla durante meditaciones guiadas."
      ]
    },
    {
      nombre: "Alegría bloqueada",
      aceites: ["Citrus Bliss", "Tangerine", "Lemongrass"],
      descripcion: "Aceites que ayudan a liberar emociones estancadas y recuperar el entusiasmo.",
      pasos: [
        "Inhalar Citrus Bliss antes de salir o bailar.",
        "Aplicar Tangerine en vientre y plexo solar.",
        "Difundir Lemongrass para renovar el ambiente."
      ]
    },
    {
      nombre: "Autocrítica",
      aceites: ["Bergamot", "Lavender", "Forgive"],
      descripcion: "Facilitan una mirada más compasiva hacia uno mismo.",
      pasos: [
        "Inhalar Bergamot en espejo con afirmaciones positivas.",
        "Aplicar Forgive sobre el corazón.",
        "Difundir Lavender mientras escribes en tu diario."
      ]
    },
    {
      nombre: "Desconexión espiritual",
      aceites: ["Frankincense", "Rose", "Melissa"],
      descripcion: "Reconectan con lo sagrado, abren el corazón y elevan la conciencia.",
      pasos: [
        "Inhalar Frankincense en silencio.",
        "Aplicar Rose en centro del pecho antes de meditar.",
        "Colocar Melissa en coronilla con intención de apertura."
      ]
    },
    {
      nombre: "Celos / Envidia",
      aceites: ["Geranium", "Coriander", "Lime"],
      descripcion: "Transforman emociones de comparación en gratitud y autenticidad.",
      pasos: [
        "Inhalar Lime para limpiar la emoción.",
        "Aplicar Geranium en corazón con afirmaciones de abundancia.",
        "Usar Coriander en muñecas antes de relaciones sociales."
      ]
    },
    {
      nombre: "Desesperanza",
      aceites: ["Elevation", "Wild Orange", "Frankincense"],
      descripcion: "Ayudan a recuperar la visión y la esperanza interior.",
      pasos: [
        "Inhalar Elevation al despertar.",
        "Aplicar Wild Orange en plexo solar.",
        "Difundir Frankincense con música suave."
      ]
    },
    {
      nombre: "Vergüenza",
      aceites: ["Bergamot", "Geranium", "Frankincense"],
      descripcion: "La vergüenza puede aislar. Estos aceites reconectan con el valor interno y la aceptación personal.",
      pasos: [
        "Aplicar Bergamot en el plexo solar y corazón.",
        "Inhalar Geranium en momentos de exposición o juicio.",
        "Usar Frankincense en meditación para sanar la imagen propia."
      ]
    },
    {
      nombre: "Soledad / Desconexión",
      aceites: ["Rose", "Balance", "Cedarwood"],
      descripcion: "Ayudan a sentirse acompañado, sostenido y parte de algo mayor.",
      pasos: [
        "Inhalar Rose al despertar o antes de dormir.",
        "Aplicar Balance en planta de pies y columna.",
        "Difundir Cedarwood durante rituales de autocuidado."
      ]
    },
    {
      nombre: "Impaciencia",
      aceites: ["Roman Chamomile", "Lavender", "Vetiver"],
      descripcion: "Aromas calmantes que devuelven al presente y suavizan la urgencia mental.",
      pasos: [
        "Inhalar Roman Chamomile en pausas conscientes.",
        "Aplicar Lavender en sienes y muñecas.",
        "Masajear pies con Vetiver diluido antes de dormir."
      ]
    },
    {
      nombre: "Apego / Dependencia emocional",
      aceites: ["Coriander", "Lime", "Geranium"],
      descripcion: "Facilitan el desapego amoroso y la autonomía afectiva.",
      pasos: [
        "Inhalar Coriander en momentos de obsesión emocional.",
        "Aplicar Lime en plexo solar con intención de liberar.",
        "Usar Geranium en el pecho para fortalecer el amor propio."
      ]
    },
    {
      nombre: "Alegría desbordada / Euforia",
      aceites: ["Vetiver", "Frankincense", "Copaiba"],
      descripcion: "Ayudan a centrar la energía y mantener equilibrio cuando hay exceso de estímulo emocional.",
      pasos: [
        "Aplicar Vetiver en planta de pies.",
        "Inhalar Frankincense profundamente por 3 minutos.",
        "Difundir Copaiba durante momentos de integración."
      ]
    },
    {
      nombre: "Desconfianza",
      aceites: ["Juniper Berry", "Rosemary", "Lavender"],
      descripcion: "Abren espacio a la confianza en uno mismo y en los demás.",
      pasos: [
        "Aplicar Juniper Berry en muñecas antes de encuentros sociales.",
        "Inhalar Rosemary durante afirmaciones de confianza.",
        "Difundir Lavender para restaurar paz interior."
      ]
    },
    {
      nombre: "Amor bloqueado",
      aceites: ["Geranium", "Rose", "Bergamot"],
      descripcion: "Cuando el corazón está cerrado, estos aceites invitan a la ternura y la apertura emocional.",
      pasos: [
        "Aplicar Geranium en el centro del pecho con respiración consciente.",
        "Inhalar Rose en momentos de vulnerabilidad.",
        "Usar Bergamot al escribir cartas de amor propio o perdón."
      ]
    }
  ]
};
// Variables DOM
const tabs = document.querySelectorAll('.tabs button');
const tablas = document.querySelectorAll('.content-table');
const tabContent = document.getElementById('tabContent');
const stepTitle = document.getElementById('stepTitle');
const stepsList = document.getElementById('stepsList');
const clearBtn = document.getElementById('clearBtn');
const searchInput = document.getElementById('searchInput');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.querySelector('#toggleSidebar'); // usa el primero
const closeSidebar = document.getElementById('closeSidebar');

// Crear título dinámico de pestaña
const tabTitulo = document.createElement('h2');
tabTitulo.style.textAlign = 'center';
tabTitulo.style.margin = '1rem 0';
document.body.insertBefore(tabTitulo, tabContent);

// Función para resaltar coincidencias
function resaltarTexto(texto, filtro) {
  if (!filtro) return texto;
  const regex = new RegExp(`(${filtro})`, 'gi');
  return texto.replace(regex, '<mark>$1</mark>');
}

// Renderiza tabla según tipo y filtro
function renderTabla(tipo, filtro = '') {
  const tabla = document.getElementById(tipo);
  const contenido = datos[tipo];
  if (!contenido) return;

  const resultado = filtro
    ? contenido.filter(item =>
        item.nombre.toLowerCase().includes(filtro) ||
        item.descripcion.toLowerCase().includes(filtro) ||
        item.aceites.some(a => a.toLowerCase().includes(filtro))
      )
    : contenido;

  if (resultado.length === 0) {
    tabla.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:1.5rem;">🔍 No se encontraron resultados para "<strong>${filtro}</strong>".</td></tr>`;
    return;
  }

  let html = `<thead><tr><th>${tipo === 'uso' ? 'Uso' : tipo === 'chakra' ? 'Chakra' : 'Emoción'}</th><th>Aceites</th><th>Descripción</th></tr></thead><tbody>`;
  for (const item of resultado) {
    html += `<tr data-tipo="${tipo}" data-nombre="${item.nombre}">
      <td>${resaltarTexto(item.nombre, filtro)}</td>
      <td>${resaltarTexto(item.aceites.join(', '), filtro)}</td>
      <td>${resaltarTexto(item.descripcion, filtro)}</td>
    </tr>`;
  }
  html += '</tbody>';
  tabla.innerHTML = html;
}

// Activa modo paso a paso en filas
function activarModoPasoAPaso() {
  document.querySelectorAll('tbody tr').forEach(row => {
    row.onclick = () => mostrarPasos(row.dataset.tipo, row.dataset.nombre);
  });
}

// Muestra pasos terapéuticos
function mostrarPasos(tipo, nombre) {
  const item = datos[tipo].find(i => i.nombre === nombre);
  if (!item) return;

  stepTitle.textContent = `Modo terapéutico para: ${nombre}`;
  stepsList.innerHTML = '';
  for (const paso of item.pasos || []) {
    const li = document.createElement('li');
    li.textContent = paso;
    stepsList.appendChild(li);
  }
  clearBtn.classList.remove('hidden');
}

// Limpiar selección
function limpiarSeleccion() {
  stepTitle.textContent = 'Selecciona una fila en cualquier tabla';
  stepsList.innerHTML = '';
  clearBtn.classList.add('hidden');
}
clearBtn.onclick = limpiarSeleccion;

// Cambiar pestañas
tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    tablas.forEach(tbl => tbl.hidden = tbl.id !== tab.dataset.tab);

    const filtro = searchInput.value.trim().toLowerCase();
    renderTabla(tab.dataset.tab, filtro);
    activarModoPasoAPaso();
    limpiarSeleccion();
    tabTitulo.textContent = `🟢 Mostrando: ${tab.textContent}`;
  };
});

// Búsqueda activa
let ultimoFiltro = '';
searchInput.oninput = () => {
  const filtro = searchInput.value.trim().toLowerCase();
  if (filtro === ultimoFiltro) return;
  ultimoFiltro = filtro;

  const activeTab = document.querySelector('.tabs button.active')?.dataset.tab || 'uso';
  renderTabla(activeTab, filtro);
  activarModoPasoAPaso();
  limpiarSeleccion();
};

// Inicialización
['uso', 'chakra', 'emocion'].forEach(tipo => renderTabla(tipo));
activarModoPasoAPaso();
document.querySelector('.tabs button.active')?.click();

// Sidebar toggle funcional
if (toggleSidebar && sidebar) {
  toggleSidebar.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-open", !isCollapsed);
  });
}

if (closeSidebar && sidebar) {
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("collapsed");
    document.body.classList.remove("sidebar-open");
  });
}

// Cierra sidebar si tocas fuera de él en móviles
document.addEventListener('click', (e) => {
  if (
    !sidebar.classList.contains('collapsed') &&
    !sidebar.contains(e.target) &&
    e.target !== toggleSidebar &&
    !e.target.closest('#toggleSidebar')
  ) {
    sidebar.classList.add('collapsed');
    document.body.classList.remove('sidebar-open');
  }
});
