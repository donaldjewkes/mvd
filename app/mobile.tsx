import Image from "next/image";
import Draggable from 'react-draggable';
import { useState, useLayoutEffect, useEffect } from 'react'


<div className="flex flex-col justify-center p-2 space-y-2">
<div className="relativez z-30">          
  <Draggable>
      <div className="drop-shadow-2xl">
          {/* <a className="text-black" href="/about">test</a> */}
          <Image className="draggable-false rounded-xl"
                  src="/logoweb.png"
                  alt=""
                  draggable="false"
                  width={150}
                  height={0}
                  layout=""
                  objectFit=""
                  priority
                />
        </div>
    </Draggable>
</div>
<div className="relative z-20">        
  <Draggable>
    <div className="drop-shadow-2xl">
      {/* <a className="text-black" href="/about">test</a> */}
      <Image className="draggable-false"
              src="/terminal.png"
              alt=""
              draggable="false"
              width={400}
              height={400}
              layout=""
              objectFit=""
              priority
            />
    </div>
  </Draggable>
</div>
<div className="relative z-10">        
  <Draggable>
    <div className="drop-shadow-2xl">
      {/* <a className="text-black" href="/about">test</a> */}
      <Image className="draggable-false"
              src="/hands.png"
              alt=""
              draggable="false"
              width={500}
              height={500}
              layout=""
              objectFit=""
              priority
            />
    </div>
  </Draggable>
</div>

</div>