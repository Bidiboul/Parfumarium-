/**
 * Réglages de marque — LOGO
 * ---------------------------------------------------------------
 * Par défaut, le site utilise un logo vectoriel (dessiné en SVG).
 *
 * Pour utiliser VOTRE logo exact :
 *  1. Détourez-le (fond transparent). Outil gratuit : https://remove.bg
 *     → enregistrez un PNG à fond transparent.
 *  2. Déposez les fichiers dans le dossier `public/` :
 *       - public/logo.png        → logo complet (monogramme + PARFUMARIUM)
 *       - public/logo-mark.png   → monogramme seul (facultatif, pour le header)
 *  3. Renseignez les chemins ci-dessous (mettez la valeur entre guillemets).
 *
 * Laissez `null` pour conserver le logo vectoriel par défaut.
 */

/** Logo complet (lockup vertical). Ex : "/logo.png" */
export const LOGO_FULL: string | null = "/logo.png";

/** Monogramme seul. Ex : "/logo-mark.png" (sinon on retombe sur LOGO_FULL) */
export const LOGO_MARK: string | null = "/logo-mark.png";
