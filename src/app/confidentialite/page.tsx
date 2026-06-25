import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company, ecommerce } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Parfumarium : données collectées, finalités, durée de conservation et vos droits (RGPD).",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de confidentialité"
      intro="La protection de vos données personnelles est une priorité. Cette politique décrit les données que nous collectons, les finalités de leur traitement et les droits dont vous disposez, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés."
      sections={[
        {
          title: "Responsable du traitement",
          blocks: [
            `Le responsable du traitement est ${company.name}, ${company.address}. Pour toute question relative à vos données : ${company.email}.`,
          ],
        },
        {
          title: "Données collectées",
          blocks: [
            "Nous collectons les données strictement nécessaires au traitement de vos commandes et à la relation client, notamment :",
            [
              "identité et coordonnées (nom, prénom, e-mail, téléphone, adresses de livraison et de facturation) ;",
              "données de commande (produits, montants, historique) ;",
              "données de connexion et de navigation (cookies, statistiques) ;",
              "le cas échéant, vos préférences et inscriptions à la newsletter.",
            ],
            "Les données de paiement (carte bancaire) sont traitées directement par notre prestataire de paiement et ne sont pas conservées par nos soins.",
          ],
        },
        {
          title: "Finalités & bases légales",
          blocks: [
            [
              "Gestion des commandes, paiements et livraisons (exécution du contrat) ;",
              "service client et gestion des réclamations (intérêt légitime / exécution du contrat) ;",
              "envoi de communications commerciales et newsletter (consentement) ;",
              "respect de nos obligations légales et comptables (obligation légale) ;",
              "amélioration du site et mesure d'audience (intérêt légitime / consentement pour les cookies non essentiels).",
            ],
          ],
        },
        {
          title: "Destinataires",
          blocks: [
            `Vos données sont destinées à nos services internes et à nos sous-traitants techniques, notamment ${ecommerce.name} (plateforme e-commerce et paiement) ainsi qu'aux transporteurs en charge de la livraison. Nous ne vendons jamais vos données à des tiers.`,
          ],
        },
        {
          title: "Durée de conservation",
          blocks: [
            "Vos données sont conservées le temps nécessaire aux finalités décrites, puis archivées conformément aux durées légales (notamment dix ans pour les documents comptables). Les données liées à la prospection sont conservées trois ans à compter du dernier contact.",
          ],
        },
        {
          title: "Vos droits",
          blocks: [
            "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de définir des directives relatives à leur sort après votre décès.",
            `Pour exercer ces droits, écrivez-nous à ${company.email}. Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).`,
          ],
        },
        {
          title: "Cookies",
          blocks: [
            "Le site utilise des cookies nécessaires à son fonctionnement ainsi que, sous réserve de votre consentement, des cookies de mesure d'audience et de personnalisation. Vous pouvez à tout moment paramétrer vos préférences ou les refuser via votre navigateur.",
          ],
        },
      ]}
    />
  );
}
