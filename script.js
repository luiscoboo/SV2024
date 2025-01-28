// Array de notas aleatorias
const notas = {
  Alegria: [
    "Tu risa ilumina el día de todos a tu alrededor guapetona.",
    "La alegría que llevas dentro es un regalo que el mundo necesita.",
    "Cada momento de felicidad es una bendición mi morena.",
    "Tienes una luz interna que ilumina incluso los días más oscuros.",
    "El Señor ha puesto en ti un espíritu de alegría que brilla.",
    "Que nada ni nadie te quite la sonrisa, bonita.",
    "El gozo del Señor es tu fortaleza mi vida",
    "Tu felicidad es una inspiración para los que te rodean.",
    "Morena, cuando sonríes, todo a tu alrededor cobra vida.",
    "Esa es la sonrrisa que me gusta, no la pierdas",
    "QUE GUAPA ERESSSSSSS JODEEEER",
    "La alegría que transmites es como un abrazo para el alma.",
    "Esa energía que tienes ilumina cualquier lugar donde estés.",
    "Cada carcajada tuya tiene el poder de inspirar a quienes te rodean.",
    "Cuando tu sonríes, es imposible no sonreír también.",
    "Tu felicidad es un recordatorio de lo bonito que es vivir.",
    "Hay algo mágico en la forma en que disfrutas los pequeños momentos.",
    "Tu alegría tiene una manera especial de conectar con los demás.",
    "Sonreír contigo hace que todo se sienta más ligero.",
    "Transmitir felicidad es algo natural en ti."

  ],
  Ira: [
    "A veces, la ira puede cegarnos, pero Dios siempre nos guía hacia la paz.",
    "No dejes que el enfado te robe la paz que tanto mereces, bonita.",
    "Amor, incluso en el enfado, nuestro vínculo se fortalece con el perdón.",
    "Morena, cuando te sientas frustrada, recuerda que el Señor es tu refugio.",
    "Mi niña toma un respiro, estás creciendo incluso en estos momentos.",
    "El Señor nos enseña a liberar la ira y encontrar serenidad.",
    "Sentir enfado es normal (siempre y cuando no sea conmigo ji ji ji ji)",
    "Con la ayuda de Dios, tu controlas tus emociones",
    "Es normal sentirse enfadada, pero recuerda que el perdón es un regalo que nos damos.",
    "Guapa, deja que Dios calme tu corazón en medio de la ira.",
    "NO SUSPIRES TANTOOOOO",
    "Efesios 4:26-27:'Enójense, pero no pequen; no dejen que el sol se ponga estando aún enojados, ni den lugar al diablo.'.",
    "La ira es un sentimiento que tienes manejar con sabiduría.",
    "Proverbios 15:1: 'La respuesta amable calma el enojo, pero la palabra áspera aumenta la ira' "
  ],
  Asco: [
    "guapaa miaa, lo que te desagrada también te recuerda tu integridad y valores.",
    "Dios te enseña a discernir lo que no es digno de ti.",
    "NO SUSPIRES TANTOOO",
    "Quien se amargue pierdeeee",
    "Amor, cuando algo te desagrada, es una señal de que estás protegiendo tu paz.",
    "A veces lo que nos causa asco también nos enseña lo que realmente valoramos.",
    "Quita esa cara que eres demasiado guapa para estar amargada",
    "Lo que te incomoda puede ser una señal de que Dios tiene algo mejor para ti.",
    "El Señor nos aparta de lo que no trae bendición a nuestra vida.",
    "Asco da la remolacha guapetona, asi que quita esa cara",
    "La amargura no trae nada bueno, intenta siempre ver el lado bueno de las cosas"
  ],
  Tristeza: [
    "Bonita, incluso en la tristeza, estás mostrando una fortaleza increíble.",
    "Guapa, tus lágrimas no son en vano; Dios está contigo en cada una.",
    "Amor, no estás sola, estoy aquí para estar contigo en los momentos más difíciles.",
    "En Dios tienes tu refugio, y en mi unos brazos cuando los necesites",
    "Dios nunca te deja, ni siquiera en los días más grises mi amor",
    "Permítete sentir mi vida porque de esa tristeza también saldrá luz.",
    "No tengas miedo de la tristeza, porque en ella también hay aprendizaje.",
    "Bonita, el Señor te sostiene incluso cuando todo parece derrumbarse.",
    "Cada lágrima que derramas está siendo recogida por Dios guapetona",
    "La tristeza no durará para siempre; la alegría volverá a contigo",
    "No estas sola, Te amo",
    "El Señor está cerca de los quebrantados de corazón y salva a los de espíritu abatido. (Salmo 34:18)",
    "Bienaventurados los que lloran, porque ellos recibirán consolación. (Mateo 5:4)",
    "En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo. (Juan 16:33)",
    "Sana a los quebrantados de corazón y venda sus heridas. (Salmo 147:3)",
    "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalece. (Isaías 41:10)",
    "Enjugará Dios toda lágrima de los ojos de ellos; y no habrá más muerte, ni llanto, ni clamor, ni dolor. (Apocalipsis 21:4)",
    "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación, que nos consuela en todas nuestras tribulaciones. (2 Corintios 1:3-4)",
    "El llanto puede durar toda la noche, pero la alegría llega con la mañana. (Salmo 30:5)",
    "A ordenar que a los afligidos de Sión se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, manto de alegría en lugar de espíritu angustiado. (Isaías 61:3)",
    "Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse. (Romanos 8:18)"
  ],
  Ansiedad: [
    "Amor, en medio de la ansiedad, Dios tiene el control y te dará paz.",
    "Morena, eres más fuerte de lo que crees, incluso en los momentos más duros.",
    "No te preocupes guapa, el Señor conoce tus necesidades y está a tu lado.",
    "Bonita, en cada respiro profundo, Dios está renovando tus fuerzas.",
    "La ansiedad no puede vencerte porque el amor de Dios siempre te sostiene.",
    "Tómate el tiempo para respirar mi vida, todo estará bien.",
    "Morena, no estás sola en esta batalla, Dios pelea por ti.",
    "Amor, deja que la paz de Dios llene tu corazón y disipe tus temores.",
    "El Señor te acompaña en cada paso, incluso cuando sientas que no puedes más.",
    "Bonita, tu valor no depende de lo que sientes ahora, sino de lo que eres.",
    "Dios está contigo, no te rindas, sigue adelante",
    "No puedes controlarlo tu todo, deja que Dios tome le control",
    "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros. (1 Pedro 5:7)",
    "No os afanéis por vuestra vida, qué habéis de comer o qué habéis de beber; ni por vuestro cuerpo, qué habéis de vestir. (Mateo 6:25)",
    "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. (Filipenses 4:6)",
    "El Señor es mi pastor; nada me faltará. (Salmo 23:1)",
    "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. (Mateo 11:28)"


  ],
  Miedo: [
    "Guapa, no temas, Dios siempre está contigo en cada paso que das.",
    "Amor, cuando sientas miedo, recuerda que tu fe es más grande que cualquier temor.",
    "Morena, eres valiente, no importa lo que enfrentes.",
    "Dios es tu refugio en cada tormenta bonita.",
    "No hay miedo que pueda con la fuerza que Dios ha puesto en ti.",
    "Guapa, cada paso que das con fe es un paso más lejos del miedo.",
    "El amor de Dios echa fuera todo temor, morena.",
    "Amor, no importa lo que enfrentes, estoy aquí a tu lado para enfrentarlo contigo.",
    "El miedo no define quién eres, Dios ya ha ganado la batalla por ti.",
    "Confía en que Dios siempre tiene un plan, incluso cuando el miedo toca a la puerta.",
    "Porque Dios no nos ha dado un espíritu de cobardía, sino de poder, de amor y de dominio propio. (2 Timoteo 1:7)",
    "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia. (Isaías 41:10)",
    "En el día que temo, yo en ti confío. (Salmo 56:3)",
    "El perfecto amor echa fuera el temor. (1 Juan 4:18)",
    "El Señor es mi luz y mi salvación; ¿de quién temeré? El Señor es la fortaleza de mi vida; ¿de quién he de atemorizarme? (Salmo 27:1)"
  ]
};


// Función para mostrar una nota aleatoria
function mostrarNota(emocion) {
  const notasEmocion = notas[emocion];
  const notaAleatoria = notasEmocion[Math.floor(Math.random() * notasEmocion.length)];

  // Redirige a una página nueva con la nota
  window.location.href = `nota.html?nota=${encodeURIComponent(notaAleatoria)}&emocion=${emocion}`;
}
