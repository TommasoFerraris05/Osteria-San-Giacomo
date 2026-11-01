# Osteria San Giacomo — sito ufficiale

Sito statico responsive per l'Osteria San Giacomo di Craveggia (VB). Non richiede build, framework, database, CMS o un servizio di prenotazioni. Si pubblica su GitHub Pages.

## Come pubblicare su GitHub Pages

1. Estrai lo ZIP sul tuo computer.
2. Su [github.com](https://github.com/) crea un repository, ad esempio `osteria-san-giacomo`.
3. Carica **i file e le cartelle contenuti nello ZIP** direttamente nella radice del repository: `index.html`, `styles.css`, `main.js`, `assets/`, `.nojekyll` e gli altri file. Non caricare la cartella esterna come sottocartella se vuoi che il sito appaia all'indirizzo principale del repository.
4. Apri **Settings → Pages**. Imposta **Source → Deploy from a branch**, branch **main**, cartella **/(root)**. Salva.
5. Il sito sarà pubblicato su `https://TUO-UTENTE.github.io/osteria-san-giacomo/`. Per collegare un dominio personalizzato puoi usarne uno successivamente da **Settings → Pages**.

## File

- `index.html` — testo, navigazione, informazioni e pulsanti di prenotazione.
- `styles.css` — aspetto grafico e adattamento a desktop/tablet/smartphone.
- `main.js` — apertura e chiusura del menu mobile, anno del footer.
- `assets/logo-originale.png` — **logo ricevuto dall'utente**, mantenuto integralmente.
- `assets/logo-insegna.png` — ritaglio trasparente della stessa insegna, per intestazione e contenuti.
- `assets/logo-tondo.png` — versione rotonda ritagliata dall'immagine fornita.
- `assets/favicon.png` — icona del browser ricavata dall'insegna.

## Palette obbligatoria

Il sito usa **solamente** questi quattro colori, come richiesto:

| Colore | Codice |
| --- | --- |
| Panna | `#F7F1E6` |
| Beige | `#E2CDB6` |
| Marrone | `#6B4A3A` |
| Rosso | `#8B1E2D` |

Le immagini del logo contengono naturalmente le sfumature originali della fotografia ricevuta. Anche ombre e trasparenze derivano dai colori della palette.

## Fotografie di Instagram

**Nessuna fotografia di piatti o del locale è stata inventata, generata o prelevata da altri ristoranti.** Instagram ha bloccato l'accesso automatico ai post del profilo indicato `@osteriasangiacomo`, perciò non è stato possibile estrarre con certezza foto o storie originali. La pagina è completa, senza riquadri vuoti né immagini segnaposto: presenta il logo ufficiale e una sezione che porta direttamente alle fotografie originali sul profilo Instagram.

Se desideri una galleria **sul sito** con i post ufficiali, puoi scaricare dai tuoi post/storie le immagini autorizzate e inserirle in `assets/`; sarà possibile aggiornare la pagina senza usare fotografie di fonte incerta. Per ragioni di affidabilità, questo pacchetto **non** usa URL temporanei dei CDN Instagram, che potrebbero scadere.

## Prenotazioni

Le prenotazioni sono effettuabili esclusivamente via **WhatsApp** o **chiamata**:

- Giovanna: `+39 346 672 2102`
- Davide: `+39 349 780 5105`

I pulsanti WhatsApp preparano un messaggio di richiesta, ma **non confermano automaticamente** alcuna prenotazione. Non ci sono form, raccolta dati o sistemi di booking di terze parti.

## Indirizzo e navigazione

Piazza San Giacomo 4, 28852 Craveggia (VB). Il riquadro della posizione è **una grafica indicativa e non una mappa stradale in scala**: per un percorso corretto i pulsanti aprono direttamente Google Maps con la destinazione impostata sull'indirizzo.

## Font, sicurezza e altre note

Il sito carica le famiglie `Italiana` e `DM Sans` da Google Fonts quando disponibile; in caso contrario usa i font di sistema. Non richiede alcuna libreria JavaScript esterna. Il layout è responsive e i pulsanti hanno etichette accessibili.

**Non sono stati indicati orari di apertura, giorni di chiusura, menu, piatti, prezzi o servizi non confermati.** Prima della pubblicazione i titolari dovrebbero confermare indirizzo, descrizione e contatti.

### Fonti storiche (non fotografie)

- GAL Laghi e Monti, *L'Osteria della Piazza* (pubblicazione che descrive la presenza dell'Osteria San Giacomo nell'ex Casa Parrocchiale): <https://www.gallaghiemonti.it/leader_2014-2024/wp-content/uploads/2017/04/Pubblicazione_completa_per_web.pdf>
- Comune di Craveggia, *Chiesa Parrocchiale dei Santi Giacomo e Cristoforo*: <https://www.comune.craveggia.vb.it/it-it/vivere-il-comune/cosa-vedere/chiesa-parrocchiale-dei-santi-giacomo-e-cristoforo-sec-xvii-1140-1-30a98960b20de395961846b32b65e48e>

## Verifiche consigliate

Prima di comunicare il sito ai clienti, apri da telefono sia il collegamento WhatsApp che il collegamento di chiamata per entrambi i titolari; verifica anche l'indirizzo che compare nelle indicazioni Google Maps.
