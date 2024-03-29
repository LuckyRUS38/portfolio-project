const Links = () => {
  const itemsRu = [
    "На главную",
    "Услуги",
    "Портфолио",
    "Контакты",
    "Обо мне"
  ];
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contacts",
    "About"
  ];

  return (
    <div className="links">{items.map(item=>(
      <a href={`#${item}`} key={item}>
        {item}
      </a>
    ))}
    </div>
  );
}

export default Links;