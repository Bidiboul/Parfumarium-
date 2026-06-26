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
      title={{ fr: "Politique de confidentialité", en: "Privacy Policy" }}
      intro={{
        fr: "Cette politique décrit les données que nous collectons, les finalités de leur traitement et vos droits, conformément au RGPD et à la loi Informatique et Libertés.",
        en: "This policy describes the data we collect, the purposes of its processing and your rights, in accordance with the GDPR and French data protection law.",
      }}
      sections={[
        { title: { fr: "Responsable du traitement", en: "Data controller" }, blocks: [{ fr: `Le responsable du traitement est ${company.name}, ${company.address}. Contact : ${company.email}.`, en: `The data controller is ${company.name}, ${company.address}. Contact: ${company.email}.` }] },
        { title: { fr: "Données collectées", en: "Data collected" }, blocks: [
          { fr: "Nous collectons les données nécessaires au traitement de vos commandes et à la relation client :", en: "We collect the data necessary to process your orders and manage the customer relationship:" },
          [
            { fr: "identité et coordonnées (nom, e-mail, téléphone, adresses) ;", en: "identity and contact details (name, email, phone, addresses);" },
            { fr: "données de commande (produits, montants, historique) ;", en: "order data (products, amounts, history);" },
            { fr: "données de navigation (cookies, statistiques) ;", en: "browsing data (cookies, statistics);" },
            { fr: "préférences et inscriptions à la newsletter.", en: "preferences and newsletter sign-ups." },
          ],
          { fr: "Les données de paiement sont traitées par notre prestataire de paiement et ne sont pas conservées par nos soins.", en: "Payment data is processed by our payment provider and is not stored by us." },
        ] },
        { title: { fr: "Finalités & bases légales", en: "Purposes & legal bases" }, blocks: [[
          { fr: "Gestion des commandes, paiements et livraisons (exécution du contrat) ;", en: "Managing orders, payments and deliveries (contract performance);" },
          { fr: "service client (intérêt légitime / contrat) ;", en: "customer service (legitimate interest / contract);" },
          { fr: "communications et newsletter (consentement) ;", en: "communications and newsletter (consent);" },
          { fr: "obligations légales et comptables (obligation légale) ;", en: "legal and accounting obligations (legal obligation);" },
          { fr: "amélioration du site et mesure d'audience (intérêt légitime / consentement).", en: "site improvement and audience measurement (legitimate interest / consent)." },
        ]] },
        { title: { fr: "Destinataires", en: "Recipients" }, blocks: [{ fr: `Vos données sont destinées à nos services et à nos sous-traitants techniques, notamment ${ecommerce.name} et les transporteurs. Nous ne vendons jamais vos données.`, en: `Your data is shared with our teams and technical processors, notably ${ecommerce.name} and carriers. We never sell your data.` }] },
        { title: { fr: "Durée de conservation", en: "Retention period" }, blocks: [{ fr: "Vos données sont conservées le temps nécessaire puis archivées selon les durées légales (notamment dix ans pour la comptabilité). Les données de prospection sont conservées trois ans après le dernier contact.", en: "Your data is kept for as long as necessary, then archived according to legal periods (notably ten years for accounting). Marketing data is kept for three years after the last contact." }] },
        { title: { fr: "Vos droits", en: "Your rights" }, blocks: [
          { fr: "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.", en: "You have the rights of access, rectification, erasure, restriction, objection and portability of your data." },
          { fr: `Pour les exercer : ${company.email}. Vous pouvez introduire une réclamation auprès de la CNIL (cnil.fr).`, en: `To exercise them: ${company.email}. You may lodge a complaint with the CNIL (cnil.fr).` },
        ] },
        { title: { fr: "Cookies", en: "Cookies" }, blocks: [{ fr: "Le site utilise des cookies nécessaires à son fonctionnement et, sous réserve de votre consentement, des cookies de mesure d'audience. Vous pouvez les paramétrer ou les refuser via votre navigateur.", en: "The site uses cookies necessary for its operation and, subject to your consent, audience measurement cookies. You can configure or refuse them via your browser." }] },
      ]}
    />
  );
}
