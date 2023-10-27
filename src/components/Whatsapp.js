import { ColorFactory } from 'antd/es/color-picker/color';

function Whatsapp() {
  return (
    <span className="whatsapp">
      <a
        href="https://wa.me/+923052990565"
        style={{
          color: '#25D366',
        }}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp icon"></i>
      </a>
    </span>
  );
}

export default Whatsapp;
