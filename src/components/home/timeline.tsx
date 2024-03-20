import Link from "next/link";
import { timelineData } from "~/data/personal-info";

interface TimelineProps { 
  theme: string;
}

export const Timeline: React.FC<TimelineProps> = ({theme}) => {
  return (
    <>
      <ol className="relative border-l mt-4 ml-2 lg:ml-10 mr-2 lg:mr-10 border-slate-500">
        {timelineData.map((item, index) => (
          <li key={index} className={`ml-4 relative ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}>
            {/* Dot */}
            <div className={`absolute w-4 h-4 shadow-2xl rounded-full mt-2 -left-6 ${theme === 'dark' ? 'bg-teal-500' : 'bg-custom-mint-green'}`}></div>
            
            {/* Year and Description */}
            <div className="flex flex-col ml-6 mt-3 mb-8">
              {/* Year */}
              <span className="text-lg tracking-tight mb-2 font-bold">{item.year}</span>
              {/* Description */}
              <p className="text-sm">{item.description}</p>
              {/* Conditional Link */}
              {item.link && (
                <Link href={item.link} className="text-blue-500 hover:underline text-sm">
                  Check it out here.
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>

    </>
  );
}
