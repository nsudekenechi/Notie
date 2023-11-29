import { Note } from "../components/Note";
import { AddButton } from "../components/DashboardAddButton";
import { useContext, useEffect } from "react";
import { useNote } from "../hooks/notes";
import { notesContext } from "../hooks/context";
import "swiper/swiper-bundle.css";
import { AnimatePresence } from "framer-motion";

// Importing icons
import { TbMoodEmpty } from "react-icons/tb";
import DashboardPagesContainer from "../components/DashboardPagesContainer";

export const AddNew = () => {
  const { notes } = useContext(notesContext);
  return (
    <>
      <DashboardPagesContainer>
        <AnimatePresence>
          {notes.map(
            (item) =>
              !item?.isArchive && !item?.isFavorite && <Note data={item} key={item._id} />
          )}
        </AnimatePresence>
       
      </DashboardPagesContainer>
      {/* 
        {isPinned && (
          <div className="pb-10 border-b">
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-x-1 my-5 ">
                <p className="text-black/40 font-bold">Pinned</p>
                <TiPin className="text-purple-600 relative -top-1" />
              </div>

              <div className="flex gap-x-2 items-center">
                <HiChevronLeft id="left" className="cursor-pointer" />
                <HiChevronRight id="right" className="cursor-pointer" />
              </div>
            </div>
            <Swiper
              className="w-[100%] "
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              navigation={{ prevEl: "#left", nextEl: "#right" }}
            >
              {notes.map(
                (item) =>
                  !item.isArchived &&
                  item.isPinned && (
                    <SwiperSlide key={item._id} className="p-1">
                      <Note data={item} key={item._id} />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
           
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  py-10 ">
          <AnimatePresence>
            {notes.map(
              (item) =>
                !item.isArchive &&
                !item.isPinned && <Note data={item} key={item._id} />
            )}
          </AnimatePresence>
        </div>
      </div> */}




    </>
  );
};
