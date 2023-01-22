export default function TeamCard({ img, name, role, link = "#", styles = "" }) {
  return (
    <div className="person">
      <div className="container2">
        <div className="container2-inner">
          <div className="circle"></div>
          <img src={img} alt="" className={"img " + styles} />
        </div>
      </div>
      <div className="divider"></div>
      <a className="name2" href={link}>
        {name}
      </a>
      <div className="title2">{role}</div>
    </div>
  );
}
