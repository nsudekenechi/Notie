import { useState } from "react";

export const CreateNote = () => {
  // Creating Colors
  const [color, setColor] = useState({
    colors: ["blue", "green", "orange"],
    selectedColor: ""
  });

  const handleSelectedColor = (selected) => {
    setColor({ ...color, selectedColor: selected })
  }
  console.log(color.selectedColor)
  return (
    <div className="md:pl-10">
      <form action="">
        <div className="flex gap-x-3">
          {color.colors.map((item, index) => (
            <div key={index} onClick={() => handleSelectedColor(item)} className={`w-5 h-5 rounded-full ${item == color.selectedColor ? "outline outline-green-300" : ""}`} style={{ backgroundColor: item }}></div>
          ))}
      Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription.
You are configuring the two datacenters as geo-clustered sites for site resiliency.
You need to recommend an Azure storage redundancy option.
You have the following data storage requirements:
✑ Data must be stored on multiple nodes.
✑ Data must be stored on nodes in separate geographic locations.
✑ Data can be read from the secondary location as well as from the primary location
Which of the following Azure stored redundancy options should you recommend?  </div>

        <div className="grid grid-cols-1 pr-10">
          <div className="col-span-1">
            <p className="my-3">Title</p>
            <input type="text" className="outline outline-1 p-3 w-[100%]" name="" id="" />
          </div>

          <div className="col-span-1">
            <p className="my-3">Subtitle</p>
            <textarea name="" id="" className="resize-none outline outline-1 p-3 w-[100%] h-[300px]"></textarea>
          </div>
        </div>
      </form>

    </div>
  );
};
