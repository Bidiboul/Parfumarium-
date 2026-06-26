import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/data/legal";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente (CGV) de Parfumarium : commande, prix, paiement, livraison, droit de rétractation et garanties.",
};

export default function CgvPage() {
  return (
    <LegalPage
      title={{ fr: "Conditions générales de vente", en: "Terms and conditions of sale" }}
      intro={{
        fr: "Les présentes conditions générales de vente (CGV) régissent les ventes de parfums réalisées sur le site. En validant sa commande, le client déclare en avoir pris connaissance et les accepter.",
        en: "These terms and conditions of sale govern the perfume sales made on the site. By confirming an order, the customer acknowledges and accepts them.",
      }}
      sections={[
        { title: { fr: "1. Produits", en: "1. Products" }, blocks: [{ fr: "Les produits proposés sont des parfums (eaux de parfum) présentés avec leurs caractéristiques essentielles. Les photographies et descriptions sont indicatives et sans valeur contractuelle. Les produits sont proposés dans la limite des stocks disponibles.", en: "The products offered are perfumes (eaux de parfum) presented with their key characteristics. Photographs and descriptions are indicative and non-contractual. Products are offered while stocks last." }] },
        { title: { fr: "2. Prix", en: "2. Prices" }, blocks: [{ fr: "Les prix sont indiqués en euros (€), toutes taxes comprises (TTC), hors frais de livraison précisés avant la validation de la commande. Les produits sont facturés au tarif en vigueur au moment de la validation de la commande.", en: "Prices are shown in euros (€), all taxes included, excluding delivery costs which are specified before order confirmation. Products are invoiced at the price in effect when the order is confirmed." }] },
        { title: { fr: "3. Commande", en: "3. Order" }, blocks: [{ fr: "Le client sélectionne les produits et leur contenance, valide son panier puis procède au paiement. La vente est conclue après confirmation de la commande et encaissement du paiement. Un e-mail de confirmation récapitule la commande.", en: "The customer selects the products and sizes, confirms the cart and proceeds to payment. The sale is concluded once the order is confirmed and payment received. A confirmation email summarises the order." }, { fr: "La société se réserve le droit d'annuler toute commande présentant un litige, un défaut de paiement ou un caractère anormal.", en: "The company reserves the right to cancel any order involving a dispute, payment default or abnormal nature." }] },
        { title: { fr: "4. Paiement", en: "4. Payment" }, blocks: [{ fr: "Le paiement s'effectue en ligne, de manière sécurisée, via notre prestataire de paiement. Les données de paiement sont chiffrées et ne sont pas conservées par la société.", en: "Payment is made online, securely, through our payment provider. Payment data is encrypted and not stored by the company." }] },
        { title: { fr: "5. Livraison", en: "5. Delivery" }, blocks: [{ fr: "Les commandes sont préparées puis expédiées sous un délai indicatif de 72 heures ouvrées. Les frais de livraison sont offerts à partir de 60 € d'achat. Voir notre Politique de livraison.", en: "Orders are prepared and dispatched within an indicative 72 business hours. Delivery is free from €60. See our Shipping Policy." }] },
        { title: { fr: "6. Droit de rétractation", en: "6. Right of withdrawal" }, blocks: [{ fr: "Le client dispose d'un délai de quatorze (14) jours à compter de la réception pour exercer son droit de rétractation, sans motif (art. L.221-18 et s. du Code de la consommation).", en: "The customer has fourteen (14) days from receipt to exercise the right of withdrawal, without reason (French Consumer Code, art. L.221-18 et seq.)." }, { fr: "Toutefois (art. L.221-28), ce droit ne s'applique pas aux produits scellés descellés après livraison pour raisons d'hygiène. Les parfums dont l'emballage de protection a été ouvert ne peuvent être ni repris ni échangés.", en: "However (art. L.221-28), this right does not apply to sealed products unsealed after delivery for hygiene reasons. Perfumes whose protective packaging has been opened cannot be returned or exchanged." }] },
        { title: { fr: "7. Garanties légales", en: "7. Legal warranties" }, blocks: [{ fr: "Le client bénéficie de la garantie légale de conformité (art. L.217-3 et s. du Code de la consommation) et de la garantie des vices cachés (art. 1641 et s. du Code civil).", en: "The customer benefits from the legal guarantee of conformity (Consumer Code, art. L.217-3 et seq.) and the warranty against hidden defects (Civil Code, art. 1641 et seq.)." }] },
        { title: { fr: "8. Réclamations & médiation", en: "8. Complaints & mediation" }, blocks: [{ fr: `Pour toute réclamation : ${company.email}. Le consommateur peut recourir gratuitement à un médiateur de la consommation. [Coordonnées du médiateur à compléter.]`, en: `For any complaint: ${company.email}. The consumer may use a consumer mediator free of charge. [Mediator details to be completed.]` }, { fr: "Le client peut aussi utiliser la plateforme européenne RLL : ec.europa.eu/consumers/odr.", en: "The customer may also use the EU ODR platform: ec.europa.eu/consumers/odr." }] },
        { title: { fr: "9. Droit applicable", en: "9. Applicable law" }, blocks: [{ fr: "Les présentes CGV sont soumises au droit français. Une solution amiable sera recherchée avant toute action judiciaire.", en: "These terms are governed by French law. An amicable solution will be sought before any legal action." }] },
      ]}
    />
  );
}
