import {
  pregnantPics,
  newbornPics,
  babyPics,
  childPics,
  familyPics,
} from "./gallery";

import { IMAGE_URL } from "../constants/url";

const types = [
  {
    name: "Newborn",
    img: IMAGE_URL + "/webps/newborn.webp",
    age: "1-30 TAGE",
    pics: newbornPics,
    url: IMAGE_URL + "/jpgs/newborn/",
    text1:
      "Die ersten Tage mit einem Neugeborenen sind etwas ganz Besonderes: Der weiche Flaum auf dem Kopf, die winzigen Finger und Zehen. Die Erinnerungen an die süßen Details verfliegen oft zu schnell.",
    text2:
      "Nutze die Gelgenheit und lass dir diese Momente professionell festhalten!",
  },
  {
    name: "Babybauch",
    img: IMAGE_URL + "/webps/pregnant.webp",
    age: "AB 30. WOCHE",
    pics: pregnantPics,
    url: IMAGE_URL + "/jpgs/pregnant/",
    text1:
      "Deine Glückskugel hat eine schöne Rundung und wahrscheinlich kannst du dich zu diesem Zeitpunkt auch noch gut bewegen und fühlst dich wohl während wir die unvergesslichen Babybauch-Bilder machen.",
    text2:
      "Ob du es mir glaubst, oder nicht, du wirst deinen Babybauch vermissen! Gönne dir schöne Fotos für die Ewigkeit.",
  },
  {
    name: "Kinder",
    img: IMAGE_URL + "/webps/kids.webp",
    age: "AB 2. JAHR",
    pics: childPics,
    url: IMAGE_URL + "/jpgs/children/",
    text1:
      "Der Alltag ist mittlerweile hektisch, kaum hast du dich umgeschaut und schon wurden kleine Minifinger größer, dein krabbelnder Schatz plötzlich zu Kita-Kinder und die ersten Sätze werden gebildet.",
    text2:
      "Unsere Kinder-Fotoshootings sind immer wieder ein riesen Spaß, kommt vorbei!",
  },
  {
    name: "Baby",
    img: IMAGE_URL + "/webps/baby.webp",
    age: "2-24 MONATE",
    pics: babyPics,
    url: IMAGE_URL + "/jpgs/baby/",
    text1:
      "Endlich ist es soweit, es wird gelacht, gekichert, skeptisch geschaut oder auch mal geweint. Jetzt ist der perfekte Zeitpunkt um die Vielfalt der neu entdeckten Emotionen festzuhalten!",
    text2:
      "Sie liegen oder sitzen noch still und sehen dabei absolut entzückend aus, lass diese besondere Phase festhalten!",
  },
  {
    name: "Familie",
    img: IMAGE_URL + "/webps/fam.webp",
    age: "IMMER!",
    pics: familyPics,
    url: IMAGE_URL + "/jpgs/family/",
    text1: `DAS gemeinsame Erlebnis. Gemeinsam schafft ihr neue Erinnerungen und unvergrssliche Momente für alle Generationen in eurer Familie.`,
    text2:
      "Erhaltet einzigartige Bilder, die dein Herz für immer höher schlagen lassen werden!",
  },
];

export default types;
