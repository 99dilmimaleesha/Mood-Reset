import BodyMovImg from "../assets/body-move.jpg";
import BreathingImg from "../assets/breathingImg.jpg";
import PositiveMusicImgr from "../assets/positivemusicImg.jpg";
import GrattitudeImg from "../assets/grattitudeimg.png";
import JournalImg from "../assets/journalImg.jpg";

const activities = [
  {
    id: 1,
    title: "5 Minutes Body Move",
    image: BodyMovImg,
    description:
      "Physical activity, even a quick walk, some stretching, or dancing to one song, releases endorphins (natural mood lifters) it also shifts your focus away from negative thoughts.",
  },
  {
    id: 2,
    title: "Breathing",
    image: BreathingImg,
    description:
      "Take a few minutes to do deep, intentional breaths (like a Box Breath: Inhale for 4, Hold for 4, Exhale for 4).This directly engages your parasympathetic nervous system, lowering your heart rate and reducing feelings of dtress and anxiety",
  },
  {
    id: 3,
    title: "Positive Music",
    image: PositiveMusicImgr,
    description: "Positive Music is powerful reset that releases endorphins. Watching a funny clip or listening to an upbeat song you love can quickly alter your emotional state.Music with a fast tempo can make you feel more positive"
  },
  {
    id: 4,
    title: "Gratitude",
    image: GrattitudeImg,
    description:"Take one minute to genuinely think of or write down 3 things, big or small, that you are greateful for right now (eg: a waem drink, a sunny window) This shifts your focus from what is lacking to what you possess."
  },
  {
    id: 5,
    title: "Journaling",
    image: JournalImg,
    description:"Writing allows you to release pent-up emotions and anxieties that often loop in your mind. This practice directly reduces stress hormones, boosts self-awareness, and improves your mood.Think of it as a nightly mental declutter, helping you manage anxiety and achieve a calmer state of mind"
  },
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-green-50 py-16 px-6">
      <h2 className="text-center text-4xl font-inter font-bold text-green-800 mb-12">
        Mood Reset Activities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col ">
              <h3 className="text-xl font-semibold font-inter text-gray-800 mb-4">
                {activity.title}
              </h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
