import { useGlobalContext } from './Context';
import sublinks from './data';

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId: localPageId, page } = item;
        return (
            <button
              key={localPageId}
              className="nav-link"
              onMouseEnter={() => setPageId(localPageId)}
            >
              {page}
            </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
