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
      eyebrow="Informations légales"
      title="Conditions générales de vente"
      intro="Les présentes conditions générales de vente (CGV) régissent les ventes de parfums réalisées sur le site et s'appliquent à toute commande passée par le client. En validant sa commande, le client déclare en avoir pris connaissance et les accepter."
      sections={[
        {
          title: "1. Produits",
          blocks: [
            "Les produits proposés sont des parfums (eaux de parfum) présentés avec leurs caractéristiques essentielles. Les photographies et descriptions sont fournies à titre indicatif et n'ont pas de valeur contractuelle. Les produits sont proposés dans la limite des stocks disponibles.",
          ],
        },
        {
          title: "2. Prix",
          blocks: [
            "Les prix sont indiqués en euros (€), toutes taxes comprises (TTC), hors frais de livraison précisés avant la validation de la commande. La société se réserve le droit de modifier ses prix à tout moment ; les produits sont facturés sur la base des tarifs en vigueur au moment de la validation de la commande.",
          ],
        },
        {
          title: "3. Commande",
          blocks: [
            "Le client sélectionne les produits, leur contenance, puis valide son panier et procède au paiement. La vente est considérée comme conclue après confirmation de la commande et encaissement du paiement. Un e-mail de confirmation récapitule la commande.",
            "La société se réserve le droit d'annuler ou de refuser toute commande présentant un litige, un défaut de paiement ou un caractère anormal.",
          ],
        },
        {
          title: "4. Paiement",
          blocks: [
            "Le paiement s'effectue en ligne, de manière sécurisée, via notre prestataire de paiement. Les données de paiement sont chiffrées et ne sont pas conservées par la société. La commande n'est traitée qu'après validation effective du paiement.",
          ],
        },
        {
          title: "5. Livraison",
          blocks: [
            "Les commandes sont préparées puis expédiées sous un délai indicatif de 72 heures ouvrées. Les modalités, délais et frais de livraison sont détaillés dans notre Politique de livraison. Les frais de livraison sont offerts à partir de 60 € d'achat.",
          ],
        },
        {
          title: "6. Droit de rétractation",
          blocks: [
            "Conformément aux articles L.221-18 et suivants du Code de la consommation, le client dispose d'un délai de quatorze (14) jours à compter de la réception des produits pour exercer son droit de rétractation, sans avoir à motiver sa décision.",
            "Toutefois, conformément à l'article L.221-28 du même Code, ce droit ne peut être exercé pour les produits scellés qui ont été descellés après la livraison et qui ne peuvent être renvoyés pour des raisons d'hygiène ou de protection de la santé. En conséquence, les parfums dont l'emballage de protection a été ouvert ne peuvent être ni repris ni échangés. Les modalités sont précisées dans notre Politique de retours.",
          ],
        },
        {
          title: "7. Garanties légales",
          blocks: [
            "Indépendamment de toute garantie commerciale, le client bénéficie de la garantie légale de conformité (articles L.217-3 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil). En cas de produit non conforme ou défectueux, le client peut nous contacter afin d'obtenir réparation.",
          ],
        },
        {
          title: "8. Réclamations & médiation",
          blocks: [
            `Pour toute réclamation, le client peut nous écrire à ${company.email}. Conformément à la réglementation, le consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige. [Coordonnées du médiateur à compléter.]`,
            "Le client peut également utiliser la plateforme européenne de Règlement en Ligne des Litiges (RLL) accessible à l'adresse ec.europa.eu/consumers/odr.",
          ],
        },
        {
          title: "9. Droit applicable",
          blocks: [
            "Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.",
          ],
        },
      ]}
    />
  );
}
