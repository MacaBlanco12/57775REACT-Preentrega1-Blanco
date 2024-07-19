import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ListaValoraciones = () => {
  const [valoraciones, setValoraciones] = useState([]);

  useEffect(() => {
    const fetchValoraciones = async () => {
      const valoracionesRef = collection(db, "valoraciones");
      const querySnapshot = await getDocs(valoracionesRef);
      const valoracionesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setValoraciones(valoracionesList);
    };

    fetchValoraciones();
  }, []);

  return (
    <div className='container'>
      <h2>Valoraciones</h2>
      <ul>
        {valoraciones.length > 0 ? (
          valoraciones.map((valoracion) => (
            <li key={valoracion.id}>
              <p><strong>Nombre:</strong> {valoracion.cliente?.nombre || 'Desconocido'}</p>
              <p><strong>Experiencia:</strong> {valoracion.cliente?.experiencia || 'No disponible'}</p>
            </li>
          ))
        ) : (
          <p>No hay valoraciones aún.</p>
        )}
      </ul>
    </div>
  );
};

export default ListaValoraciones;