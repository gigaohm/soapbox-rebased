"use strict";(self.webpackChunkpleroma_fe=self.webpackChunkpleroma_fe||[]).push([[1547],{31478:(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});const o={about:{mrf:{federation:e=>{const{normalize:r}=e;return r(["Federácia"])},keyword:{keyword_policies:e=>{const{normalize:r}=e;return r(["Pravidlá pre kľúčové slová"])},ftl_removal:e=>{const{normalize:r}=e;return r(['Odstránenie z časovej osy "Celej známej siete"'])},reject:e=>{const{normalize:r}=e;return r(["Odmietni"])},replace:e=>{const{normalize:r}=e;return r(["Nahraď"])},is_replaced_by:e=>{const{normalize:r}=e;return r(["→"])}},mrf_policies:e=>{const{normalize:r}=e;return r(["Povoliť MRF pravidlá"])},mrf_policies_desc:e=>{const{normalize:r}=e;return r(["MRF pravidlá upravujú správanie servera v rámci federácie s inými.  Nasledovné pravidlá sú aktívne:"])},simple:{simple_policies:e=>{const{normalize:r}=e;return r(["Pravidlá špecifické pre tento server"])},instance:e=>{const{normalize:r}=e;return r(["Server"])},reason:e=>{const{normalize:r}=e;return r(["Dôvod"])},not_applicable:e=>{const{normalize:r}=e;return r(["N/A"])},accept:e=>{const{normalize:r}=e;return r(["Prijať"])},accept_desc:e=>{const{normalize:r}=e;return r(["Tento server preberá správy len z nasledovných serverov:"])},reject:e=>{const{normalize:r}=e;return r(["Odmietnuť"])},reject_desc:e=>{const{normalize:r}=e;return r(["Tento server preberá správy spravy z nasledovných serverov:"])},quarantine:e=>{const{normalize:r}=e;return r(["Karanténa"])},quarantine_desc:e=>{const{normalize:r}=e;return r(["Tento server posiela verejné oznamy len na nasledovné servre:"])},ftl_removal:e=>{const{normalize:r}=e;return r(['Odstránenie časovej osy "Známa sieť"'])},ftl_removal_desc:e=>{const{normalize:r}=e;return r(['Tento server odstraňuje nasledovné serverov zo svojej časovej osy "Známa sieť":'])},media_removal:e=>{const{normalize:r}=e;return r(["Odstránenie médií"])},media_removal_desc:e=>{const{normalize:r}=e;return r(["Tento server odstraňuje médiá zo správ nasledovných serverov:"])},media_nsfw:e=>{const{normalize:r}=e;return r(["Označenie médií ako citlivých"])},media_nsfw_desc:e=>{const{normalize:r}=e;return r(["Tento server označuje média ako citlivé v správach z nasledovných serverov:"])}}},staff:e=>{const{normalize:r}=e;return r(["Personál"])}},shoutbox:{title:e=>{const{normalize:r}=e;return r(["Verejné fórum"])}},domain_mute_card:{mute:e=>{const{normalize:r}=e;return r(["Utíš"])},mute_progress:e=>{const{normalize:r}=e;return r(["Utišujem…"])},unmute:e=>{const{normalize:r}=e;return r(["Povoľ oznamy"])},unmute_progress:e=>{const{normalize:r}=e;return r(["Povoľujem oznamy…"])}},exporter:{export:e=>{const{normalize:r}=e;return r(["Export"])},processing:e=>{const{normalize:r}=e;return r(["Spracováva sa, čoskoro sa ti ponúknu na stiahnutie súbory s dátami exportu"])}},features_panel:{shout:e=>{const{normalize:r}=e;return r(["Verejné fórum"])},pleroma_chat_messages:e=>{const{normalize:r}=e;return r(["Pleroma Chat"])},gopher:e=>{const{normalize:r}=e;return r(["Gopher"])},media_proxy:e=>{const{normalize:r}=e;return r(["Proxy pre médiá"])},scope_options:e=>{const{normalize:r}=e;return r(["Nastavenia rámca"])},text_limit:e=>{const{normalize:r}=e;return r(["Limit počtu znakov"])},title:e=>{const{normalize:r}=e;return r(["Vlastnosti"])},who_to_follow:e=>{const{normalize:r}=e;return r(["Koho nasledovať"])},upload_limit:e=>{const{normalize:r}=e;return r(["Limit nahrávania"])}},finder:{error_fetching_user:e=>{const{normalize:r}=e;return r(["Chyba načítavania užívateľa"])},find_user:e=>{const{normalize:r}=e;return r(["Nájsť užívateľa"])}},general:{apply:e=>{const{normalize:r}=e;return r(["Použiť"])},submit:e=>{const{normalize:r}=e;return r(["Odoslať"])},more:e=>{const{normalize:r}=e;return r(["Viac"])},loading:e=>{const{normalize:r}=e;return r(["Nahrávam…"])},generic_error:e=>{const{normalize:r}=e;return r(["Nastala chyba"])},error_retry:e=>{const{normalize:r}=e;return r(["Zopakuj znova, prosím"])},retry:e=>{const{normalize:r}=e;return r(["Zopakuj znova"])},optional:e=>{const{normalize:r}=e;return r(["nepovinné"])},show_more:e=>{const{normalize:r}=e;return r(["Zobraz viac"])},show_less:e=>{const{normalize:r}=e;return r(["Zobraz menej"])},dismiss:e=>{const{normalize:r}=e;return r(["Zahoď"])},cancel:e=>{const{normalize:r}=e;return r(["Zruš"])},disable:e=>{const{normalize:r}=e;return r(["Vypni"])},enable:e=>{const{normalize:r}=e;return r(["Zapni"])},confirm:e=>{const{normalize:r}=e;return r(["Potvrdiť"])},verify:e=>{const{normalize:r}=e;return r(["Overiť"])},close:e=>{const{normalize:r}=e;return r(["Zatvoriť"])},peek:e=>{const{normalize:r}=e;return r(["Vybrať"])},role:{admin:e=>{const{normalize:r}=e;return r(["Správca"])},moderator:e=>{const{normalize:r}=e;return r(["Moderátor"])}},flash_content:e=>{const{normalize:r}=e;return r(["Klikni pre zobrazenie Flash obsahu prostredníctvom Ruffle (experimentálne, nemusí fungovať)."])},flash_security:e=>{const{normalize:r}=e;return r(["Flash obsah je potencionálne nebezpečný, keďže je to produkt s uzatvoreným kódom."])},flash_fail:e=>{const{normalize:r}=e;return r(["Nepodarilo sa nahrať Flash obsah, pre detaily pozri konzolu prehliadača."])},scope_in_timeline:{direct:e=>{const{normalize:r}=e;return r(["Priame"])},private:e=>{const{normalize:r}=e;return r(["Len pre nasledovníkov"])},public:e=>{const{normalize:r}=e;return r(["Verejné"])},unlisted:e=>{const{normalize:r}=e;return r(["Nezaradené"])}}},image_cropper:{crop_picture:e=>{const{normalize:r}=e;return r(["Orezať obrázok"])},save:e=>{const{normalize:r}=e;return r(["Uložiť"])},save_without_cropping:e=>{const{normalize:r}=e;return r(["Ulož bez orezania"])},cancel:e=>{const{normalize:r}=e;return r(["Zrušiť"])}},importer:{submit:e=>{const{normalize:r}=e;return r(["Odoslať"])},success:e=>{const{normalize:r}=e;return r(["Úspečne naimportované."])},error:e=>{const{normalize:r}=e;return r(["Pri importe súboru nastala chyba."])}},login:{login:e=>{const{normalize:r}=e;return r(["Prihlásiť sa"])},description:e=>{const{normalize:r}=e;return r(["Prihlásiť pomocou OAuth"])},logout:e=>{const{normalize:r}=e;return r(["Odhlásiť sa"])},password:e=>{const{normalize:r}=e;return r(["Heslo"])},placeholder:e=>{const{normalize:r}=e;return r(["napr. peter"])},register:e=>{const{normalize:r}=e;return r(["Registrácia"])},username:e=>{const{normalize:r}=e;return r(["Meno užívateľa"])},hint:e=>{const{normalize:r}=e;return r(["Prihlás sa, aby si sa mohol zúčastniť konverzácie"])},authentication_code:e=>{const{normalize:r}=e;return r(["Autentifikačný kód"])},enter_recovery_code:e=>{const{normalize:r}=e;return r(["Zadaj kód obnovenia"])},enter_two_factor_code:e=>{const{normalize:r}=e;return r(["Zadaj 2-fázový validačný kód"])},recovery_code:e=>{const{normalize:r}=e;return r(["Kód obnovenia"])},heading:{totp:e=>{const{normalize:r}=e;return r(["2-fázové overenie"])},recovery:e=>{const{normalize:r}=e;return r(["2-fázové obnova"])}}},media_modal:{previous:e=>{const{normalize:r}=e;return r(["Predchádzajúce"])},next:e=>{const{normalize:r}=e;return r(["Nasledujúce"])},counter:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("current"))," / ",n(o("total"))])},hide:e=>{const{normalize:r}=e;return r(["Zatvoriť prehliadač médií"])}},nav:{about:e=>{const{normalize:r}=e;return r(["O stránke"])},administration:e=>{const{normalize:r}=e;return r(["Administrácia"])},back:e=>{const{normalize:r}=e;return r(["Späť"])},friend_requests:e=>{const{normalize:r}=e;return r(["Žiadosti o priateľstvo"])},mentions:e=>{const{normalize:r}=e;return r(["Zmienky"])},interactions:e=>{const{normalize:r}=e;return r(["Interakcie"])},dms:e=>{const{normalize:r}=e;return r(["Priame správy"])},public_tl:e=>{const{normalize:r}=e;return r(["Verejná časová os"])},timeline:e=>{const{normalize:r}=e;return r(["Časová os"])},home_timeline:e=>{const{normalize:r}=e;return r(["Domáca časová os"])},twkn:e=>{const{normalize:r}=e;return r(["Známa sieť"])},bookmarks:e=>{const{normalize:r}=e;return r(["Záložky"])},user_search:e=>{const{normalize:r}=e;return r(["Hľadanie užívateľa"])},search:e=>{const{normalize:r}=e;return r(["Hladať"])},who_to_follow:e=>{const{normalize:r}=e;return r(["Koho nasledovať"])},preferences:e=>{const{normalize:r}=e;return r(["Nastavenia"])},timelines:e=>{const{normalize:r}=e;return r(["Časové osy"])},chats:e=>{const{normalize:r}=e;return r(["Chaty"])}},notifications:{broken_favorite:e=>{const{normalize:r}=e;return r(["Neznáma správa, dohľadávam ju…"])},error:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Chyba získavania upozornení: ",n(o(0))])},favorited_you:e=>{const{normalize:r}=e;return r(["si obľúbil tvoju správu"])},followed_you:e=>{const{normalize:r}=e;return r(["ťa nasleduje"])},follow_request:e=>{const{normalize:r}=e;return r(["ťa chce nasledovať"])},load_older:e=>{const{normalize:r}=e;return r(["Nahrať staršie upozornenia"])},notifications:e=>{const{normalize:r}=e;return r(["Upozornenia"])},read:e=>{const{normalize:r}=e;return r(["Prečítané!"])},repeated_you:e=>{const{normalize:r}=e;return r(["zopakoval tvoju správu"])},no_more_notifications:e=>{const{normalize:r}=e;return r(["Žiadne ďalšie upozornenia"])},migrated_to:e=>{const{normalize:r}=e;return r(["sa presťahoval na"])},reacted_with:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["reagoval nasledovne ",n(o(0))])}},polls:{add_poll:e=>{const{normalize:r}=e;return r(["Pridať anketu"])},add_option:e=>{const{normalize:r}=e;return r(["Pridať možnosť"])},option:e=>{const{normalize:r}=e;return r(["Možnosť"])},votes:e=>{const{normalize:r}=e;return r(["hlasy"])},people_voted_count:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r([n(o("count"))," volič"]),r([n(o("count"))," voličov"])])},votes_count:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r([n(o("count"))," hlas"]),r([n(o("count"))," hlasov"])])},vote:e=>{const{normalize:r}=e;return r(["Hlas"])},type:e=>{const{normalize:r}=e;return r(["Typ ankety"])},single_choice:e=>{const{normalize:r}=e;return r(["Výber jednej možnosti"])},multiple_choices:e=>{const{normalize:r}=e;return r(["Výber viacerých možností"])},expiry:e=>{const{normalize:r}=e;return r(["Vek ankety"])},expires_in:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Anketa končí za ",n(o(0))])},expired:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Anketa skončila pre ",n(o(0))])},not_enough_options:e=>{const{normalize:r}=e;return r(["Príliš málo jedinečných možností v ankete"])}},emoji:{stickers:e=>{const{normalize:r}=e;return r(["Nálepka"])},emoji:e=>{const{normalize:r}=e;return r(["Emotikon"])},keep_open:e=>{const{normalize:r}=e;return r(["Ponechaj okno výberu otvorené"])},search_emoji:e=>{const{normalize:r}=e;return r(["Vyhladať emotikon"])},add_emoji:e=>{const{normalize:r}=e;return r(["Vložiť emotikon"])},custom:e=>{const{normalize:r}=e;return r(["Vlastný emotikon"])},unicode:e=>{const{normalize:r}=e;return r(["Unicode emotikon"])},load_all_hint:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Nahralo sa prvých ",n(o("saneAmount"))," emotikonov, nahranie všetkých by mohlo spôsobiť zníženie výkonu."])},load_all:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Nahrať všetkých ",n(o("emojiAmount"))," emotikonov"])}},errors:{storage_unavailable:e=>{const{normalize:r}=e;return r(["Pleroma nemôže používať úložisko prehliadača. Tvoje prihlasovacie meno a lokálne nastavenia nebudú uchované a môžu sa vyskytnúť neočakávané chyby. Skús povoliť cookie."])}},interactions:{favs_repeats:e=>{const{normalize:r}=e;return r(["Zopakovania a obľúbené"])},follows:e=>{const{normalize:r}=e;return r(["Nový nasledovatelia"])},moves:e=>{const{normalize:r}=e;return r(["Užívateľ sa sťahuje"])},load_older:e=>{const{normalize:r}=e;return r(["Nahrať staršiu komunikáciu"])}},post_status:{new_status:e=>{const{normalize:r}=e;return r(["Poslať novú správu"])},account_not_locked_warning:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Tvoj účen nie je ",n(o(0)),". Ktokoľvek ťa môže začať nasledovať a tak vidieť správy určené len pre nasledovateľov."])},account_not_locked_warning_link:e=>{const{normalize:r}=e;return r(["uzamknuté"])},attachments_sensitive:e=>{const{normalize:r}=e;return r(["Označiť prílohy ako citlivé"])},media_description:e=>{const{normalize:r}=e;return r(["Popis média"])},content_type:{"text/plain":e=>{const{normalize:r}=e;return r(["Obyčajný text"])},"text/html":e=>{const{normalize:r}=e;return r(["HTML"])},"text/markdown":e=>{const{normalize:r}=e;return r(["Markdown"])},"text/bbcode":e=>{const{normalize:r}=e;return r(["BBCode"])}},content_warning:e=>{const{normalize:r}=e;return r(["Nadpis (nepovinné)"])},default:e=>{const{normalize:r}=e;return r(["Práve som ..."])},direct_warning_to_all:e=>{const{normalize:r}=e;return r(["Túto správu bude vidieť každý užívateľ, ktorého v nej spomenieš."])},direct_warning_to_first_only:e=>{const{normalize:r}=e;return r(["Táto správa bude viditeľná len pre užívateľov, ktorých vymenuješ na začiatku správy."])},posting:e=>{const{normalize:r}=e;return r(["Posielanie"])},post:e=>{const{normalize:r}=e;return r(["Poslať"])},preview:e=>{const{normalize:r}=e;return r(["Náhľad"])},preview_empty:e=>{const{normalize:r}=e;return r(["Prázdne"])},empty_status_error:e=>{const{normalize:r}=e;return r(["Nie je možné odoslať prázdnu správu bez priložených súborov"])},media_description_error:e=>{const{normalize:r}=e;return r(["Nepodarilo sa aktualizovať média, skús znova"])},scope_notice:{public:e=>{const{normalize:r}=e;return r(["Túto správu bude vidieť každý"])},private:e=>{const{normalize:r}=e;return r(["Túto správu budú vidieť len tvoji nasledovníci"])},unlisted:e=>{const{normalize:r}=e;return r(["Táto správa nebude viditeľná na verejnej časovej osi a v celej známej sieti"])}},scope:{direct:e=>{const{normalize:r}=e;return r(["Priama správa - zobrazí sa len užívateľom spomenutým v správe"])},private:e=>{const{normalize:r}=e;return r(["Pre nasledovníkov - zobrazí sa len tvojim nasledovníkom"])},public:e=>{const{normalize:r}=e;return r(["Verejné - zobrazí sa vo všetkých časových osiach"])},unlisted:e=>{const{normalize:r}=e;return r(["Nezaradené - nezobrazí sa v žiadnej časovej osy"])}}},registration:{bio:e=>{const{normalize:r}=e;return r(["Životopis"])},email:e=>{const{normalize:r}=e;return r(["Email"])},fullname:e=>{const{normalize:r}=e;return r(["Zobrazované meno"])},password_confirm:e=>{const{normalize:r}=e;return r(["Potvrdenie hesla"])},registration:e=>{const{normalize:r}=e;return r(["Registrácia"])},token:e=>{const{normalize:r}=e;return r(["Pozývací kód"])},captcha:e=>{const{normalize:r}=e;return r(["CAPTCHA"])},new_captcha:e=>{const{normalize:r}=e;return r(["Klikni na obrázok a vnikne nová captcha"])},username_placeholder:e=>{const{normalize:r}=e;return r(["napr. peter"])},fullname_placeholder:e=>{const{normalize:r}=e;return r(["napr. Peter Kukurica"])},bio_placeholder:e=>{const{normalize:r}=e;return r(["e.g.\nHi, I'm Lain.\nI’m an anime girl living in suburban Japan. You may know me from the Wired."])},reason:e=>{const{normalize:r}=e;return r(["Dôvod registrácie"])},reason_placeholder:e=>{const{normalize:r}=e;return r(["Tento server schvaľuje registrácie manuálne.\nZanechaj správcom dôvod, prečo máš záujem vytvoriť si tu účet."])},register:e=>{const{normalize:r}=e;return r(["Registrácia"])},validations:{username_required:e=>{const{normalize:r}=e;return r(["nemôže byť prázdne"])},fullname_required:e=>{const{normalize:r}=e;return r(["nemôže byť prázdne"])},email_required:e=>{const{normalize:r}=e;return r(["nemôže byť prázdne"])},password_required:e=>{const{normalize:r}=e;return r(["nemôže byť prázdne"])},password_confirmation_required:e=>{const{normalize:r}=e;return r(["nemôže byť prázdne"])},password_confirmation_match:e=>{const{normalize:r}=e;return r(["musí byť rovnaké ako heslo"])}}},remote_user_resolver:{remote_user_resolver:e=>{const{normalize:r}=e;return r(["Vzdialené overenie užívateľa"])},searching_for:e=>{const{normalize:r}=e;return r(["Hľadám..."])},error:e=>{const{normalize:r}=e;return r(["Nenájdené."])}},selectable_list:{select_all:e=>{const{normalize:r}=e;return r(["Vybrať všetko"])}},time:{day:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," deň"])},days:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," dní"])},day_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"d"])},days_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"d"])},hour:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," hodina"])},hours:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," hodín"])},hour_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"h"])},hours_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"h"])},in_future:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["za ",n(o(0))])},in_past:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["pred ",n(o(0))])},minute:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," minúta"])},minutes:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," minút"])},minute_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"min"])},minutes_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"min"])},month:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," mesiac"])},months:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," mesiacov"])},month_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"mes"])},months_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"mes"])},now:e=>{const{normalize:r}=e;return r(["práve teraz"])},now_short:e=>{const{normalize:r}=e;return r(["teraz"])},second:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," sekunda"])},seconds:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," sekúnd"])},second_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"s"])},seconds_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"s"])},week:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," týždeň"])},weeks:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," týždňov"])},week_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"t"])},weeks_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"t"])},year:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," rok"])},years:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0))," rokov"])},year_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"r"])},years_short:e=>{const{normalize:r,interpolate:n,list:o}=e;return r([n(o(0)),"r"])}},timeline:{collapse:e=>{const{normalize:r}=e;return r(["Zbaliť"])},conversation:e=>{const{normalize:r}=e;return r(["Konverzácia"])},error:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Chyba pri nahrávaní časovej správy: ",n(o(0))])},load_older:e=>{const{normalize:r}=e;return r(["Nahrať staršie správy"])},no_retweet_hint:e=>{const{normalize:r}=e;return r(["Správa je označená ako len-pre-nasledovateľov alebo ako priama a nemôže byť zopakovaná na tvojej časovej osy."])},repeated:e=>{const{normalize:r}=e;return r(["zopakované"])},show_new:e=>{const{normalize:r}=e;return r(["Zobraziť nové"])},reload:e=>{const{normalize:r}=e;return r(["Znovu nahrať"])},up_to_date:e=>{const{normalize:r}=e;return r(["Aktuálne"])},no_more_statuses:e=>{const{normalize:r}=e;return r(["Žiadne ďalšie správy"])},no_statuses:e=>{const{normalize:r}=e;return r(["Žiadne správy"])},socket_reconnected:e=>{const{normalize:r}=e;return r(["Prepojenie v reálnom čase bolo úspešne vytvorené"])},socket_broke:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Strata prepojenia v reálnom čase: chyba CloseEvent kód ",n(o(0))])}},status:{favorites:e=>{const{normalize:r}=e;return r(["Obľúbené"])},repeats:e=>{const{normalize:r}=e;return r(["Opakovania"])},delete:e=>{const{normalize:r}=e;return r(["Zmazať správu"])},pin:e=>{const{normalize:r}=e;return r(["Pripnúť na stránku užívateľa"])},unpin:e=>{const{normalize:r}=e;return r(["Odopnúť zo stránky užívateľa"])},pinned:e=>{const{normalize:r}=e;return r(["Pripnuté"])},bookmark:e=>{const{normalize:r}=e;return r(["Vytvoriť záložku"])},unbookmark:e=>{const{normalize:r}=e;return r(["Zmazať záložku"])},delete_confirm:e=>{const{normalize:r}=e;return r(["Skutočne chceš zmazať túto správu?"])},reply_to:e=>{const{normalize:r}=e;return r(["Odpovedať komu"])},mentions:e=>{const{normalize:r}=e;return r(["Spomenutia"])},replies_list:e=>{const{normalize:r}=e;return r(["Odpovede:"])},replies_list_with_others:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r(["Odpoveď (+",n(o("numReplies"))," iný):"]),r(["Odpoveď (+",n(o("numReplies"))," iných):"])])},mute_conversation:e=>{const{normalize:r}=e;return r(["Stíšiť konverzáciu"])},unmute_conversation:e=>{const{normalize:r}=e;return r(["Oznamovať konverzáciu"])},status_unavailable:e=>{const{normalize:r}=e;return r(["Neznámy status"])},copy_link:e=>{const{normalize:r}=e;return r(["Skopírovať odkaz do správy"])},external_source:e=>{const{normalize:r}=e;return r(["Vzdialený zdroj"])},thread_muted:e=>{const{normalize:r}=e;return r(["Konverzácia stíšená"])},thread_muted_and_words:e=>{const{normalize:r}=e;return r([", má slová:"])},show_full_subject:e=>{const{normalize:r}=e;return r(["Zobraziť celý nadpis"])},hide_full_subject:e=>{const{normalize:r}=e;return r(["Skry celý nadpis"])},show_content:e=>{const{normalize:r}=e;return r(["Zobraziť obsah"])},hide_content:e=>{const{normalize:r}=e;return r(["Skryť obsah"])},status_deleted:e=>{const{normalize:r}=e;return r(["Táto správa bola zmazaná"])},nsfw:e=>{const{normalize:r}=e;return r(["NSFW"])},expand:e=>{const{normalize:r}=e;return r(["Rozbaliť správu"])},you:e=>{const{normalize:r}=e;return r(["(ty)"])},plus_more:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["+",n(o("number"))," ďalších"])},many_attachments:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Správa má ",n(o("number"))," príloh"])},collapse_attachments:e=>{const{normalize:r}=e;return r(["Zabaliť médiá"])},show_all_attachments:e=>{const{normalize:r}=e;return r(["Zobraz všetky prílohy"])},show_attachment_in_modal:e=>{const{normalize:r}=e;return r(["Zobraz médiá modálne"])},show_attachment_description:e=>{const{normalize:r}=e;return r(["Náhľad popisku (otvor prílohu pre zobrazenie celého popisku)"])},hide_attachment:e=>{const{normalize:r}=e;return r(["Skryť prílohy"])},remove_attachment:e=>{const{normalize:r}=e;return r(["Odstrániť prílohy"])},attachment_stop_flash:e=>{const{normalize:r}=e;return r(["Zastaviť prehrávač Flashu"])},move_up:e=>{const{normalize:r}=e;return r(["Presuň prílohu doľava"])},move_down:e=>{const{normalize:r}=e;return r(["Presuň prílohu doprava"])},open_gallery:e=>{const{normalize:r}=e;return r(["Otvoriť galériu"])},thread_hide:e=>{const{normalize:r}=e;return r(["Skry túto konverzáciu"])},thread_show:e=>{const{normalize:r}=e;return r(["Zobraz túto konverzáciu"])},thread_show_full:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r(["Zobraz všetko pod touto konverzáciou (celkovo ",n(o("numStatus"))," správa, max hĺbka ",n(o("depth")),")"]),r(["Zobraz všetko pod touto konverzáciou (celkovo ",n(o("numStatus"))," správ, max hĺbka ",n(o("depth")),")"])])},thread_show_full_with_icon:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("icon"))," ",n(o("text"))])},thread_follow:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r(["Zobraz zvyšnú časť tejto konverzácie (celkovo ",n(o("numStatus"))," správa)"]),r(["Zobraz zvyšnú časť tejto konverzácie (celkovo ",n(o("numStatus"))," správ)"])])},thread_follow_with_icon:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("icon"))," ",n(o("text"))])},ancestor_follow:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r(["Pozri ",n(o("numReplies"))," ďalšiu odpoveď pod touto správou"]),r(["Pozri ",n(o("numReplies"))," ďalších odpovedí pod touto správou"])])},ancestor_follow_with_icon:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("icon"))," ",n(o("text"))])},show_all_conversation_with_icon:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("icon"))," ",n(o("text"))])},show_all_conversation:e=>{const{normalize:r,interpolate:n,named:o,plural:t}=e;return t([r(["Zobraz celú konverzáciu (",n(o("numStatus"))," iná správa)"]),r(["Zobraz celú konverzáciu (",n(o("numStatus"))," iných správ)"])])},show_only_conversation_under_this:e=>{const{normalize:r}=e;return r(["Zobraz len správy súvisiace s touto správou"])}},user_card:{approve:e=>{const{normalize:r}=e;return r(["Schváliť"])},block:e=>{const{normalize:r}=e;return r(["Zablokovať"])},blocked:e=>{const{normalize:r}=e;return r(["Blokované!"])},deactivated:e=>{const{normalize:r}=e;return r(["Neaktívne"])},deny:e=>{const{normalize:r}=e;return r(["Zakázané"])},edit_profile:e=>{const{normalize:r}=e;return r(["Uraviť profil"])},favorites:e=>{const{normalize:r}=e;return r(["Obľúbené"])},follow:e=>{const{normalize:r}=e;return r(["Nasledovať"])},follow_cancel:e=>{const{normalize:r}=e;return r(["Požiadavka zrušená"])},follow_sent:e=>{const{normalize:r}=e;return r(["Požiadavka zaslaná!"])},follow_progress:e=>{const{normalize:r}=e;return r(["Žiadam o povolenie…"])},follow_unfollow:e=>{const{normalize:r}=e;return r(["Prestať sledovať"])},followees:e=>{const{normalize:r}=e;return r(["Nasleduje"])},followers:e=>{const{normalize:r}=e;return r(["Nasledovatelia"])},following:e=>{const{normalize:r}=e;return r(["Nasleduješ!"])},follows_you:e=>{const{normalize:r}=e;return r(["Nasleduje teba!"])},hidden:e=>{const{normalize:r}=e;return r(["Skryté"])},its_you:e=>{const{normalize:r}=e;return r(["To si ty!"])},media:e=>{const{normalize:r}=e;return r(["Média"])},mention:e=>{const{normalize:r}=e;return r(["Spomenul"])},message:e=>{const{normalize:r}=e;return r(["Správa"])},mute:e=>{const{normalize:r}=e;return r(["Stíšiť"])},muted:e=>{const{normalize:r}=e;return r(["Stíšené"])},per_day:e=>{const{normalize:r}=e;return r(["za deň"])},remote_follow:e=>{const{normalize:r}=e;return r(["Nasledovanie z ďaleka"])},report:e=>{const{normalize:r}=e;return r(["Nahlásiť"])},statuses:e=>{const{normalize:r}=e;return r(["Vytvorených správ"])},subscribe:e=>{const{normalize:r}=e;return r(["Prihlásiť k odberu"])},unsubscribe:e=>{const{normalize:r}=e;return r(["Odhlásiť z odberu"])},unblock:e=>{const{normalize:r}=e;return r(["Odblokovať"])},unblock_progress:e=>{const{normalize:r}=e;return r(["Oblokováva sa…"])},block_progress:e=>{const{normalize:r}=e;return r(["Blokujem…"])},unmute:e=>{const{normalize:r}=e;return r(["Povoliť oznamy"])},unmute_progress:e=>{const{normalize:r}=e;return r(["Povoľujem oznamy…"])},mute_progress:e=>{const{normalize:r}=e;return r(["Stišujem…"])},hide_repeats:e=>{const{normalize:r}=e;return r(["Skry zopakovania"])},show_repeats:e=>{const{normalize:r}=e;return r(["Zobraz zopakovania"])},bot:e=>{const{normalize:r}=e;return r(["Robot"])},admin_menu:{moderation:e=>{const{normalize:r}=e;return r(["Moderovanie"])},grant_admin:e=>{const{normalize:r}=e;return r(["Povoliť spravovanie"])},revoke_admin:e=>{const{normalize:r}=e;return r(["Zakázať spravovanie"])},grant_moderator:e=>{const{normalize:r}=e;return r(["Povoliť moderovanie"])},revoke_moderator:e=>{const{normalize:r}=e;return r(["Zakázať moderovanie"])},activate_account:e=>{const{normalize:r}=e;return r(["Aktivovať účet"])},deactivate_account:e=>{const{normalize:r}=e;return r(["Deaktivovať účet"])},delete_account:e=>{const{normalize:r}=e;return r(["Zmazať účet"])},force_nsfw:e=>{const{normalize:r}=e;return r(["Označ všetky správy ako NSFW"])},strip_media:e=>{const{normalize:r}=e;return r(["Odstrániť média zo správy"])},force_unlisted:e=>{const{normalize:r}=e;return r(["Vynúť, aby správy neboli zobrazované"])},sandbox:e=>{const{normalize:r}=e;return r(["Vynúť, aby správy boli len pre nasledovateľov"])},disable_remote_subscription:e=>{const{normalize:r}=e;return r(["Odstrániť prístup k serveru nasledovnému vzdialenému užívateľovi"])},disable_any_subscription:e=>{const{normalize:r}=e;return r(["Zakázať nasledovanie užívateľov"])},quarantine:e=>{const{normalize:r}=e;return r(["Zakázať federáciu správ užívateľa"])},delete_user:e=>{const{normalize:r}=e;return r(["Zmazať užívateľa"])},delete_user_confirmation:e=>{const{normalize:r}=e;return r(["Si si úplne istý? Táto akcia sa nedá zobrať späť."])}},highlight:{disabled:e=>{const{normalize:r}=e;return r(["Bez zvýraznenia"])},solid:e=>{const{normalize:r}=e;return r(["Jednoliate pozadie"])},striped:e=>{const{normalize:r}=e;return r(["Šrafované pozadie"])},side:e=>{const{normalize:r}=e;return r(["Pásik na boku"])}}},user_profile:{timeline_title:e=>{const{normalize:r}=e;return r(["Časová os užívateľa"])},profile_does_not_exist:e=>{const{normalize:r}=e;return r(["Prepáč, tento profil neexistuje."])},profile_loading_error:e=>{const{normalize:r}=e;return r(["Prepáč, nastala chyba pri nahrávaní profilu."])}},user_reporting:{title:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Nahlásení ",n(o(0))])},add_comment_description:e=>{const{normalize:r}=e;return r(["Hlásnenie bude zaslané moderátorom servera. Nižšie môžeš napísať dôvod prečo tento účet nahlasuješ:"])},additional_comments:e=>{const{normalize:r}=e;return r(["Ďalšie poznámky"])},forward_description:e=>{const{normalize:r}=e;return r(["Účet je z iného servera. Poslať kópiu tohto hlásenia aj tam?"])},forward_to:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Preposlať komu ",n(o(0))])},submit:e=>{const{normalize:r}=e;return r(["Odoslať"])},generic_error:e=>{const{normalize:r}=e;return r(["Nastala chyba pri vykonaní tvojej požiadavky."])}},who_to_follow:{more:e=>{const{normalize:r}=e;return r(["Viac"])},who_to_follow:e=>{const{normalize:r}=e;return r(["Koho nasledovať"])}},tool_tip:{media_upload:e=>{const{normalize:r}=e;return r(["Nahrať médium"])},repeat:e=>{const{normalize:r}=e;return r(["Zopakovať"])},reply:e=>{const{normalize:r}=e;return r(["Odpovedať"])},favorite:e=>{const{normalize:r}=e;return r(["Obľúbené"])},add_reaction:e=>{const{normalize:r}=e;return r(["Reagovať"])},user_settings:e=>{const{normalize:r}=e;return r(["Nastavenia užívateľa"])},accept_follow_request:e=>{const{normalize:r}=e;return r(["Prijať požiadavku nasledovníka"])},reject_follow_request:e=>{const{normalize:r}=e;return r(["Odmietnuť požiadavku nasledovníka"])},bookmark:e=>{const{normalize:r}=e;return r(["Záložka"])}},upload:{error:{base:e=>{const{normalize:r}=e;return r(["Nahrávanie bolo neúspešné."])},message:e=>{const{normalize:r,interpolate:n,list:o}=e;return r(["Nahrávanie bolo neúspešné: ",n(o(0))])},file_too_big:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Súbor je príliš veľký [",n(o("filesize")),n(o("filesizeunit"))," / ",n(o("allowedsize")),n(o("allowedsizeunit")),"]"])},default:e=>{const{normalize:r}=e;return r(["Vyskúšaj opäť neskôr"])}}},search:{people:e=>{const{normalize:r}=e;return r(["Ľudia"])},hashtags:e=>{const{normalize:r}=e;return r(["Haštagy"])},person_talking:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("count"))," človek hovorí"])},people_talking:e=>{const{normalize:r,interpolate:n,named:o}=e;return r([n(o("count"))," ľudí hovorí"])},no_results:e=>{const{normalize:r}=e;return r(["Žiadne výsledky"])}},password_reset:{forgot_password:e=>{const{normalize:r}=e;return r(["Zabudol si heslo?"])},password_reset:e=>{const{normalize:r}=e;return r(["Obnovenie hesla"])},instruction:e=>{const{normalize:r}=e;return r(["Zadaj svoju emailovú adresu alebo užívateľské meno. Pošleme ti odkaz pomocou, ktorého môžeš obnoviť svoje heslo."])},placeholder:e=>{const{normalize:r}=e;return r(["Tvoj email alebo užívateľské meno"])},check_email:e=>{const{normalize:r}=e;return r(["V novom emaile ti bol doručený odkaz na spôsob, ako obnovíš svoje heslo."])},return_home:e=>{const{normalize:r}=e;return r(["Návrat na domácu stránku"])},too_many_requests:e=>{const{normalize:r}=e;return r(["Prekročil si limit pokusov, skús znova neskôr."])},password_reset_disabled:e=>{const{normalize:r}=e;return r(["Obnova hesla je vypnutá. Kontaktuj, prosím, správcu tohto servera."])},password_reset_required:e=>{const{normalize:r}=e;return r(["Musíš najskôr obnoviť heslo, ak sa chceš prihlásiť."])},password_reset_required_but_mailer_is_disabled:e=>{const{normalize:r}=e;return r(["Musíš obnoviť svoje heslo, ale obnova hesla je na serveri vypnutá. Kontaktuj, prosím, správcu tohto servera."])}},chats:{you:e=>{const{normalize:r}=e;return r(["Ty:"])},message_user:e=>{const{normalize:r,interpolate:n,named:o}=e;return r(["Správa ",n(o("nickname"))])},delete:e=>{const{normalize:r}=e;return r(["Zmazať"])},chats:e=>{const{normalize:r}=e;return r(["Rozhovor"])},new:e=>{const{normalize:r}=e;return r(["Nový rozhovor"])},empty_message_error:e=>{const{normalize:r}=e;return r(["Nie je možné odoslať prázdnu správu"])},more:e=>{const{normalize:r}=e;return r(["Viac"])},delete_confirm:e=>{const{normalize:r}=e;return r(["Skutočne chceš zmazať túto správu?"])},error_loading_chat:e=>{const{normalize:r}=e;return r(["Nastala chyba pri nahrávaní rozhovoru."])},error_sending_message:e=>{const{normalize:r}=e;return r(["Nastala chyba pri odosielaní správ."])},empty_chat_list_placeholder:e=>{const{normalize:r}=e;return r(["Nemáš za sebou žiadne rozhovory. Začni nový rozhovor!"])}},file_type:{audio:e=>{const{normalize:r}=e;return r(["Audio"])},video:e=>{const{normalize:r}=e;return r(["Video"])},image:e=>{const{normalize:r}=e;return r(["Obrázok"])},file:e=>{const{normalize:r}=e;return r(["Súbor"])}},display_date:{today:e=>{const{normalize:r}=e;return r(["Dnes"])}}}}}]);
//# sourceMappingURL=sk-json.d8d0eba80f94e6f55145.js.map