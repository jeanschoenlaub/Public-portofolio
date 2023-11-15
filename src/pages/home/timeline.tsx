import { timelineData } from "../../data/career-line";

export default function Timeline() {
  

  return (
    <>
      <ol className="relative border-l ml-20 mt-4 mr-20 border-slate-500">
        {timelineData.map((item, index) => (
          <li key={index} className="ml-4 relative">
            {/* Dot */}
            <div className={`absolute w-4 h-4 bg-custom-mint-green rounded-full mt-2 -left-6`}></div>
            
            {/* Year and Description */}
            <div className="flex flex-col ml-6 mt-3 mb-8">
              {/* Year */}
              <span className="text-lg font-semibold">{item.year}</span>
              {/* Description */}
              <p className="text-sm">{item.description}</p>
              {/* Conditional Link */}
              {item.link && (
                <a href={item.link} className="text-blue-500 hover:underline text-sm">
                  Check it out here.
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>

    </>
  );
}
