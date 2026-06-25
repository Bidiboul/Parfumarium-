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
      eyebrow="Informations"
      title="Livraison"
      intro="Nous préparons chaque commande avec soin pour qu'elle vous parvienne dans les meilleures conditions."
      sections={[
        {
          title: "Délais d'expédition",
          blocks: [
            "Les commandes sont préparées et expédiées sous un délai indicatif de 72 heures ouvrées après confirmation du paiement. Un e-mail vous informe de l'expédition de votre colis.",
          ],
        },
        {
          title: "Zones & délais de livraison",
          blocks: [
            "Nous livrons en France métropolitaine. Le délai d'acheminement dépend du transporteur, en complément du délai d'expédition.",
            "[Pour les livraisons hors France métropolitaine (Corse, DROM-COM, international), précisez ici vos zones, délais et tarifs.]",
          ],
        },
        {
          title: "Frais de livraison",
          blocks: [
            "Les frais de livraison sont calculés et affichés avant la validation de votre commande.",
            "La livraison est offerte à partir de 60 € d'achat.",
          ],
        },
        {
          title: "Suivi de commande",
          blocks: [
            "Un numéro de suivi vous est communiqué dès l'expédition, lorsque le mode de livraison le permet, afin de suivre votre colis jusqu'à sa réception.",
          ],
        },
        {
          title: "Problème de livraison",
          blocks: [
            `En cas de colis endommagé, perdu ou de retard anormal, contactez-nous à ${company.email} : nous mettrons tout en œuvre pour trouver une solution rapide.`,
          ],
        },
        {
          title: "Retrait en boutique",
          blocks: [
            `Vous pouvez également nous retrouver dans notre boutique : ${company.address}. Nous serons ravis de vous accueillir pour un accompagnement personnalisé.`,
          ],
        },
      ]}
    />
  );
}
