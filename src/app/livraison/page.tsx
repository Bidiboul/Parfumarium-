import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/data/legal";

export const metadata: Metadata = {
  title: "Livraison",
  description:
    "Politique de livraison Parfumarium : délais d'expédition (72h), zones, frais et livraison offerte dès 60 €.",
};

export default function LivraisonPage() {
  return (
    <LegalPage
      title={{ fr: "Livraison", en: "Shipping" }}
      intro={{ fr: "Nous préparons chaque commande avec soin pour qu'elle vous parvienne dans les meilleures conditions.", en: "We prepare every order with care so it reaches you in the best conditions." }}
      sections={[
        { title: { fr: "Délais d'expédition", en: "Dispatch times" }, blocks: [{ fr: "Les commandes sont préparées et expédiées sous un délai indicatif de 72 heures ouvrées après confirmation du paiement. Un e-mail vous informe de l'expédition.", en: "Orders are prepared and dispatched within an indicative 72 business hours after payment confirmation. An email notifies you of the dispatch." }] },
        { title: { fr: "Zones & délais de livraison", en: "Zones & delivery times" }, blocks: [{ fr: "Nous livrons en France métropolitaine. Le délai d'acheminement dépend du transporteur, en complément du délai d'expédition.", en: "We deliver to mainland France. Transit time depends on the carrier, in addition to the dispatch time." }, { fr: "[Pour les livraisons hors France métropolitaine, précisez ici vos zones, délais et tarifs.]", en: "[For deliveries outside mainland France, specify your zones, times and rates here.]" }] },
        { title: { fr: "Frais de livraison", en: "Shipping costs" }, blocks: [{ fr: "Les frais de livraison sont affichés avant la validation de votre commande.", en: "Shipping costs are shown before you confirm your order." }, { fr: "La livraison est offerte à partir de 60 € d'achat.", en: "Shipping is free from €60." }] },
        { title: { fr: "Suivi de commande", en: "Order tracking" }, blocks: [{ fr: "Un numéro de suivi vous est communiqué dès l'expédition, lorsque le mode de livraison le permet.", en: "A tracking number is provided once dispatched, when the delivery method allows." }] },
        { title: { fr: "Problème de livraison", en: "Delivery issue" }, blocks: [{ fr: `En cas de colis endommagé, perdu ou de retard anormal, contactez-nous à ${company.email}.`, en: `If your parcel is damaged, lost or abnormally delayed, contact us at ${company.email}.` }] },
        { title: { fr: "Retrait en boutique", en: "In-store pickup" }, blocks: [{ fr: `Vous pouvez aussi nous retrouver en boutique : ${company.address}.`, en: `You can also find us in store: ${company.address}.` }] },
      ]}
    />
  );
}
