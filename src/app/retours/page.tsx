import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/data/legal";

export const metadata: Metadata = {
  title: "Retours & rétractation",
  description:
    "Politique de retours Parfumarium : droit de rétractation de 14 jours et exception d'hygiène applicable aux parfums descellés.",
};

export default function RetoursPage() {
  return (
    <LegalPage
      title={{ fr: "Retours & rétractation", en: "Returns & withdrawal" }}
      intro={{ fr: "Voici les règles applicables aux retours, dans le respect de la réglementation sur la vente à distance.", en: "Here are the rules for returns, in compliance with distance-selling regulations." }}
      sections={[
        { title: { fr: "Droit de rétractation", en: "Right of withdrawal" }, blocks: [{ fr: "Vous disposez d'un délai de quatorze (14) jours à compter de la réception pour exercer votre droit de rétractation, sans justification.", en: "You have fourteen (14) days from receipt to exercise your right of withdrawal, without justification." }] },
        { title: { fr: "Exception d'hygiène (parfums descellés)", en: "Hygiene exception (unsealed perfumes)" }, blocks: [{ fr: "Pour des raisons d'hygiène, le droit de rétractation ne peut s'exercer sur les produits scellés descellés après livraison (art. L.221-28 du Code de la consommation).", en: "For hygiene reasons, the right of withdrawal cannot be exercised on sealed products unsealed after delivery (French Consumer Code, art. L.221-28)." }, { fr: "Un parfum dont l'emballage de protection a été ouvert ne peut être ni repris, ni échangé, ni remboursé. Seuls les produits neufs, non descellés et dans leur emballage d'origine intact sont éligibles.", en: "A perfume whose protective packaging has been opened cannot be returned, exchanged or refunded. Only new, unsealed products in their intact original packaging are eligible." }] },
        { title: { fr: "Comment procéder", en: "How to proceed" }, blocks: [{ fr: `Pour un produit éligible (non descellé), contactez-nous à ${company.email} avec votre numéro de commande. Nous vous indiquerons la marche à suivre.`, en: `For an eligible product (unsealed), contact us at ${company.email} with your order number. We will tell you how to proceed.` }, { fr: "Les frais de retour sont [à votre charge / pris en charge — à préciser]. Le produit doit être renvoyé au plus tard 14 jours après votre demande.", en: "Return costs are [at your expense / covered — to be specified]. The product must be returned within 14 days of your request." }] },
        { title: { fr: "Remboursement", en: "Refund" }, blocks: [{ fr: "Après réception et vérification, le remboursement est effectué par le même moyen de paiement, dans un délai maximum de 14 jours.", en: "After receipt and inspection, the refund is made using the same payment method, within a maximum of 14 days." }] },
        { title: { fr: "Produit défectueux ou non conforme", en: "Defective or non-conforming product" }, blocks: [{ fr: `Si vous recevez un produit endommagé ou non conforme, contactez-nous à ${company.email} : un échange ou un remboursement vous sera proposé, sans frais.`, en: `If you receive a damaged or non-conforming product, contact us at ${company.email}: an exchange or refund will be offered, free of charge.` }] },
      ]}
    />
  );
}
