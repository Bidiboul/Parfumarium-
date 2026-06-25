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
      eyebrow="Informations"
      title="Retours & rétractation"
      intro="Votre satisfaction nous tient à cœur. Voici les règles applicables aux retours, dans le respect de la réglementation sur la vente à distance."
      sections={[
        {
          title: "Droit de rétractation",
          blocks: [
            "Conformément au Code de la consommation, vous disposez d'un délai de quatorze (14) jours à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motif.",
          ],
        },
        {
          title: "Exception d'hygiène (parfums descellés)",
          blocks: [
            "Pour des raisons d'hygiène et de protection de la santé, le droit de rétractation ne peut pas s'exercer sur les produits scellés qui ont été descellés après la livraison (article L.221-28 du Code de la consommation).",
            "En pratique, un parfum dont l'emballage de protection (film, scellé) a été ouvert ne peut être ni repris, ni échangé, ni remboursé. Seuls les produits retournés neufs, non descellés et dans leur emballage d'origine intact peuvent faire l'objet d'une rétractation.",
          ],
        },
        {
          title: "Comment procéder",
          blocks: [
            `Pour exercer votre droit de rétractation sur un produit éligible (non descellé), contactez-nous à ${company.email} en indiquant votre numéro de commande. Nous vous communiquerons la marche à suivre pour le retour.`,
            "Les frais de retour sont [à votre charge / pris en charge — à préciser]. Le produit doit être renvoyé sans tarder et au plus tard dans les 14 jours suivant votre demande.",
          ],
        },
        {
          title: "Remboursement",
          blocks: [
            "Après réception et vérification de l'état du produit retourné, le remboursement est effectué par le même moyen de paiement que celui utilisé lors de la commande, dans un délai maximum de 14 jours.",
          ],
        },
        {
          title: "Produit défectueux ou non conforme",
          blocks: [
            `Si vous recevez un produit endommagé ou non conforme à votre commande, contactez-nous rapidement à ${company.email} : un échange ou un remboursement vous sera proposé au titre des garanties légales, sans frais.`,
          ],
        },
      ]}
    />
  );
}
