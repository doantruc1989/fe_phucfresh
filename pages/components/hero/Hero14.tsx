import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

function Hero14() {
  return (
    <div className='mt-12'>
    <h1 className="text-3xl uppercase font-medium mt-3">VÀO BẾP</h1>
    <p className="w-1/2 text-gray-400 text-sm mt-3">
    Cách nấu món ăn ngon mỗi ngày dễ làm cùng chuyên gia.
      </p>
    <div>
    <TabView>
            <TabPanel header="Thực Phẩm Chức Năng">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Bánh Kẹo">
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>           
        </TabView>
    </div>
</div>
  )
}

export default Hero14