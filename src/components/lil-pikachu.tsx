export const Pikachu = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-lime-800 w-full sm:max-w-1/3 float-left mb-4 sm:mr-4">
      <div
        className="relative flex-1 w-full bg-white aspect-square max-w-full flex flex-col rendering-pixelated specimen-dots"
      >
        <div
          className="font-polished text-black smooth-never text-px leading-none border-black bg-white border-b p-1 ring-1 ring-white flex justify-between space-x-2 px-2"
        >
          <div className="flex justify-between space-x-3">
            {/* <span>Pokedex</span> */}
            {/* <span>PKMN</span> */}
            {/* <span>Bag</span> */}
            {/* <span>Options</span> */}
            {/* <span>Save</span> */}
          </div>
          <div className="flex justify-between space-x-3">
            {/* <span>11:11:11</span> */}
            <span>Save</span>

          </div>
        </div>
        <div className="relative flex-1 z-0">
          <div
            className="absolute text-black smooth-never text-px border-black bg-white border overflow-hidden rounded-sm block ring-1 ring-white font-polished bottom-2 right-2 z-10 aspect-square w-3/5"
          >
            <div className="handle p-1 border-b border-black relative h-4">
              <div
                className="h-2 w-2 rounded-sm border border-black bg-white absolute left-1 top-1"
              ></div>
              <div
                className="h-2 w-2 rounded-sm border border-black bg-white absolute left-4 top-1"
              ></div>
              <div
                className="h-2 w-2 rounded-sm border border-black absolute left-7 top-1"
              ></div>
              {/* <div className="absolute left-12 top-0">cammy.gif</div> */}
            </div>
            <img
              alt="pokemon trainer surrounded by their pokemon on top of a hill looking at the forest"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="block relative w-full px-2 pt-2 rendering-pixelated object-contain bg-[#F8F8F8]"
              src="/images/pikachu.webp"
              style={{ color: 'transparent' }}
            />
          </div>
          <div
            className="absolute text-black smooth-never text-px border-black bg-white border overflow-hidden rounded-sm block ring-1 ring-white font-polished aspect-square w-3/5 top-2 left-2 z-0"
          >
            <div className="handle  p-1 border-b border-black relative h-4">
              <div
                className="h-2 w-2 rounded-sm border border-black bg-white absolute left-1 top-1"
              ></div>
              <div
                className="h-2 w-2 rounded-sm border border-black bg-white absolute left-4 top-1"
              ></div>
              <div
                className="h-2 w-2 rounded-sm border border-black absolute left-7 top-1"
              ></div>
              {/* <div className="absolute left-12 top-0">intro.txt</div> */}
            </div>
            <div
              data-hj-allow="true"
              className="p-1 border-none text-black smooth-never text-px text-left resize-none leading-none w-full h-full bg-white no-scrollbar"
            >
              hi!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
