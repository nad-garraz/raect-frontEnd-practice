import { useRef } from 'react';
import { useGlobalContext } from './Context';
import sublinks from './data';


const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  //find devuelve el elemento del array
  const currentPage = sublinks.find((item) => item.pageId === pageId);


  const submenuContainer = useRef(null);
  
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const {left, right, bottom} = submenu.getBoundingClientRect();
    const { clientX, clientY, ctrlKey } = event;
    console.log(event, `tipo: ${typeof(left)}`)

    if ( clientX < left || clientX > right || clientY > bottom) {
     setPageId(null)
    }
    // console.log(submenu)
}


  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave} ref={submenuContainer}>
      <h5> {currentPage?.page} </h5> <div className="submenu-links" style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
