import { NhIcon } from "./_nh.icon";
import { NhLink } from "./_nh.link";

interface INhBreadcrumbItem {
  title: string;
  path?: string;
}

interface INhBreadcrumbs {
  items: INhBreadcrumbItem[];
}

const NhBreadcrumbs = ({ items }: INhBreadcrumbs) => {
  return (
    <nav className="uppercase">
      <ol className="flex items-center gap-2 text-xs text-slate-500 font-inter">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path ? (
              <NhLink title={item.title} path={item.path} className="font-medium hover:animate-pulse">
                {item.title}
              </NhLink>
            ) : (
              <span className="text-slate-400 allow-select">{item.title}</span>
            )}
            {index < items.length - 1 && <NhIcon icon="ChevronRight" className="mx-2 size-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { NhBreadcrumbs };
