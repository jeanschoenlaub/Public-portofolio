import { useEffect, useState } from "react";

interface TableOfContentsProps {
    htmlContent: string;
    theme: string;
}
  
interface TocItem {
    id: string;
    text: string | null;
}
  
  
export const TableOfContents: React.FC<TableOfContentsProps> = ({ htmlContent, theme }) => {
  
    const [tocItems, setTocItems] = useState<TocItem[]>([]);
  
  
    useEffect(() => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const headings = doc.querySelectorAll('p[id]');
      const newTocItems = Array.from(headings).map(heading => ({
        id: heading.id,
        text: heading.textContent,
      }));
  
      setTocItems(newTocItems);
    }, [htmlContent]);
  
    return (
      <div className="">
        {tocItems.length > 0 && (
          <div className={`${theme === 'dark' ? ' text-gray-200' : 'text-gray-900'}`}>
            <div className="text-xl font-semibold mb-4"> Table of Content </div>
            <ol>
              {tocItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`}
                    className="text-lg font-normal underline-custom-mint-green"
                    >
                    <span> 
                        {index+1}. {item.text} 
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  };