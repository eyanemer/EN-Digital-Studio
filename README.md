# EN Digital Studio

Site vitrine React + Vite pour EN Digital Studio.

## Lancer le projet

```bash
npm install
npm run dev
```

Pour générer la version de production :

```bash
npm run build
```

## Formulaire de contact

Le formulaire envoie les demandes à `endigitalstudio0@gmail.com` via FormSubmit, sans clé API ou mot de passe exposé dans le code.

Lors de la première demande envoyée depuis le site déployé, FormSubmit expédie un e-mail d’activation à cette adresse. Ouvrez cet e-mail et confirmez l’activation une seule fois. Les demandes suivantes arriveront ensuite directement dans la boîte de réception.

L’adresse destinataire est définie dans `src/components/Contact.jsx`, dans la constante `FORM_ENDPOINT`.
