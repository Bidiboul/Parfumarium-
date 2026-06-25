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
      eyebrow="Informations légales"
      title="Mentions légales"
      sections={[
        {
          title: "Éditeur du site",
          blocks: [
            `Le site ${company.site} est édité par ${company.name}.`,
            [
              `Forme juridique : ${company.legalForm}`,
              `Capital social : ${company.capital}`,
              `Siège / adresse : ${company.address}`,
              `SIRET : ${company.siret}`,
              `RCS : ${company.rcs}`,
              `N° TVA intracommunautaire : ${company.tva}`,
              `E-mail : ${company.email}`,
              `Téléphone : ${company.phone}`,
            ],
            `Responsable de la publication : ${company.director}.`,
          ],
        },
        {
          title: "Hébergement du site",
          blocks: [
            `Le site vitrine est hébergé par ${host.name}, ${host.address} (${host.site}).`,
            `La boutique en ligne, le tunnel de paiement et la gestion des commandes sont fournis par ${ecommerce.name}, ${ecommerce.address} (${ecommerce.site}).`,
          ],
        },
        {
          title: "Propriété intellectuelle",
          blocks: [
            "L'ensemble des éléments du site (textes, visuels, logo, charte graphique, mise en page) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.",
          ],
        },
        {
          title: "Données personnelles & cookies",
          blocks: [
            "Le traitement de vos données personnelles est décrit dans notre Politique de confidentialité. L'utilisation des cookies est encadrée par les bandeaux et préférences proposés lors de votre navigation.",
          ],
        },
        {
          title: "Responsabilité",
          blocks: [
            "L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur le site mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités. Les visuels des produits sont non contractuels.",
          ],
        },
      ]}
    />
  );
}
