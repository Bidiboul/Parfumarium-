import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company, host, ecommerce } from "@/data/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Parfumarium : éditeur du site, hébergeur et informations légales obligatoires.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title={{ fr: "Mentions légales", en: "Legal notice" }}
      sections={[
        {
          title: { fr: "Éditeur du site", en: "Site publisher" },
          blocks: [
            { fr: `Le site ${company.site} est édité par ${company.name}.`, en: `The website ${company.site} is published by ${company.name}.` },
            [
              { fr: `Forme juridique : ${company.legalForm}`, en: `Legal form: ${company.legalForm}` },
              { fr: `Capital social : ${company.capital}`, en: `Share capital: ${company.capital}` },
              { fr: `Adresse : ${company.address}`, en: `Address: ${company.address}` },
              { fr: `SIRET : ${company.siret}`, en: `SIRET: ${company.siret}` },
              { fr: `RCS : ${company.rcs}`, en: `Trade register: ${company.rcs}` },
              { fr: `N° TVA intracommunautaire : ${company.tva}`, en: `VAT number: ${company.tva}` },
              { fr: `E-mail : ${company.email}`, en: `Email: ${company.email}` },
              { fr: `Téléphone : ${company.phone}`, en: `Phone: ${company.phone}` },
            ],
            { fr: `Responsable de la publication : ${company.director}.`, en: `Publication director: ${company.director}.` },
          ],
        },
        {
          title: { fr: "Hébergement du site", en: "Hosting" },
          blocks: [
            { fr: `Le site vitrine est hébergé par ${host.name}, ${host.address} (${host.site}).`, en: `The storefront is hosted by ${host.name}, ${host.address} (${host.site}).` },
            { fr: `La boutique en ligne, le tunnel de paiement et la gestion des commandes sont fournis par ${ecommerce.name}, ${ecommerce.address} (${ecommerce.site}).`, en: `The online store, checkout and order management are provided by ${ecommerce.name}, ${ecommerce.address} (${ecommerce.site}).` },
          ],
        },
        {
          title: { fr: "Propriété intellectuelle", en: "Intellectual property" },
          blocks: [
            { fr: "L'ensemble des éléments du site (textes, visuels, logo, charte graphique, mise en page) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou exploitation sans autorisation écrite préalable est interdite.", en: "All elements of the site (texts, visuals, logo, graphic identity, layout) are protected by intellectual property law. Any reproduction or use without prior written permission is prohibited." },
          ],
        },
        {
          title: { fr: "Données personnelles & cookies", en: "Personal data & cookies" },
          blocks: [
            { fr: "Le traitement de vos données personnelles est décrit dans notre Politique de confidentialité. L'utilisation des cookies est encadrée par les préférences proposées lors de votre navigation.", en: "The processing of your personal data is described in our Privacy Policy. The use of cookies is governed by the preferences offered during your browsing." },
          ],
        },
        {
          title: { fr: "Responsabilité", en: "Liability" },
          blocks: [
            { fr: "L'éditeur s'efforce d'assurer l'exactitude des informations mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités. Les visuels des produits sont non contractuels.", en: "The publisher strives to ensure the accuracy of the information but cannot be held liable for errors, omissions or unavailability. Product images are non-contractual." },
          ],
        },
      ]}
    />
  );
}
