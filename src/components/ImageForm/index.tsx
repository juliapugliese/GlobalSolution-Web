'use client'
import React from 'react';
import ImagePicker from '@/components/ImagePicker';

export default function UploadPage() {
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Upload realizado com sucesso!');
      // Redireciona o usuário para outra página após o upload bem-sucedido
      window.location.href = '/';
    } else {
      alert('Erro ao realizar o upload.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImagePicker
        id="profileImage"
        name="profileImage"
        label="Selecione uma imagem"
      />
      <button type="submit">Enviar Imagem</button>
    </form>
  );
}

