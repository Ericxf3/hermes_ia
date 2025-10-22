import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook, faInstagram, faEye, faLink } from '@fortawesome/free-brands-svg-icons';
import { faEye as faEyeSolid } from '@fortawesome/free-solid-svg-icons';

const Widget = styled.div`
  background: rgba(242, 242, 240, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(4, 217, 196, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(4, 217, 196, 0.3);
  transition: transform 0.3s ease;
  &:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(4, 217, 196, 0.4); }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  th, td { border: 1px solid rgba(242, 242, 240, 0.2); padding: 15px; text-align: left; color: #F2F2F0; }
  th { background: rgba(4, 217, 196, 0.2); font-weight: 500; }
  tr:hover { background: rgba(4, 217, 196, 0.1); }
`;

const ToggleBtn = styled.button`
  background: linear-gradient(135deg, #04D9C4 0%, #051726 100%);
  border: none;
  color: #F2F2F0;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(4, 217, 196, 0.3);
  &:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(4, 217, 196, 0.5); }
`;

export default function Plataformas() {
  return (
    <>
      <Widget>
        <h3><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp - Monitoreo de Chats y Agentes IA</h3>
        <Table>
          <thead>
            <tr><th>ID Usuario (Nombre)</th><th>Mensajes (Último)</th><th>Estado</th><th>Acciones</th><th>Seguimiento de Leads</th></tr>
          </thead>
          <tbody>
            <tr><td>12345 (Juan Diaz)</td><td>Agente IA: Hola, ¿cómo estás?</td><td style={{color: '#04D9C4'}}>Activo</td><td><ToggleBtn><FontAwesomeIcon icon={faEyeSolid} /> Ver Chats</ToggleBtn></td><td><ToggleBtn><FontAwesomeIcon icon={faLink} /> Ver Lead</ToggleBtn></td></tr>
            <tr><td>67890 (Ana Lopez)</td><td>Cliente: Gracias por la info.</td><td style={{color: '#F2F2F0'}}>Resuelto</td><td><ToggleBtn><FontAwesomeIcon icon={faEyeSolid} /> Ver Chats</ToggleBtn></td><td><ToggleBtn><FontAwesomeIcon icon={faLink} /> Ver Lead</ToggleBtn></td></tr>
          </tbody>
        </Table>
      </Widget>
      {/* Repite para Telegram, Facebook, Instagram con datos similares */}
      <Widget>
        <h3><FontAwesomeIcon icon={faTelegram} /> Telegram - Monitoreo de Chats y Agentes IA</h3>
        <Table>
          <thead>
            <tr><th>ID Usuario (Nombre)</th><th>Mensajes (Último)</th><th>Estado</th><th>Acciones</th><th>Seguimiento de Leads</th></tr>
          </thead>
          <tbody>
           