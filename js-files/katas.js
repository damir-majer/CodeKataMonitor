//############### ALL KATAS (MODIFY HERE FOR ADDING, CHANGGING, ...)##########################
var katas = {
    0:{
        title:'String Calculator',
        tasks:{
            0:{
                title           : 'Einführung',
                content         : '%3Cdiv%3E%0A%20%20%20%20%E2%80%A2Bevor%20Sie%20beginnen%3A%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93Versuchen%20Sie%20nicht%2C%20weiter%20zu%20lesen%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93F%C3%BChren%20Sie%20eine%20Aufgabe%20nach%20der%20anderen%20durch%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93Der%20Trick%20besteht%20darin%2C%20dass%20Sie%20Lernen%20schrittweise%20(inkrementell)%20zu%20arbeiten%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93Achte%20darauf%2C%20nur%20korrekte%20Eingabewerte%20zu%20testen.%20Es%20gibt%20keine%20Notwendigkeit%20ung%C3%BCltige%20Eingabewerte%20f%C3%BCr%20diese%20Kata%20zu%20Testen%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%A2Grunds%C3%A4tzliches%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93Denken%20Sie%20daran%2C%20die%20Dinge%20so%20einfach%20wie%20m%C3%B6glich%20zu%20l%C3%B6sen%2C%20damit%20Sie%20sich%20auf%20das%20entwickeln%20der%20Tests%20konzentrieren%20k%C3%B6nnen%0A%3C%2Fdiv%3E%0A%3Cdiv%3E%0A%20%20%20%20%E2%80%93Denken%20Sie%20daran%2C%20Refactoring%20nach%20jedem%20Bestehen%20der%20Pr%C3%BCfung%20(green)%20durchzuf%C3%BChren%0A%3C%2Fdiv%3E',
                is_any_video    : false,                    
                is_done         : false, 
            },
            1:{
                title           : 'Summe 2 Zahlen berechnen',
                content         : '%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%A2Erstellen%20eine%20einfache%20Klasse%20String-Calculator%20mit%20einer%20Methode%20add(String)%20um%20Nummern%20einzugeben%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%A2Die%20Methode%20kann%200%2C%201%20oder%202%20Zahlen%20empfangen%20und%20soll%20die%20Summe%20zur%C3%BCck%20geben%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%93z.B.%3A%20f%C3%BCr%20einen%20leeren%20String%2C%20wird%200%20zur%C3%BCckgeben%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%93z.B.%3A%20f%C3%BCr%20%221%22%20wird%201%20zur%C3%BCckgegeben%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%93z.B.%3A%20f%C3%BCr%20%E2%80%9C1%2C2%22%20wird%203%20zur%C3%BCckgegeben%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%A2%3D%26gt%3B%20Starte%20mit%20dem%20einfachsten%20Test%20eines%20leeren%20Strings%20und%20gehe%20dann%20schrittweise%20zu%20den%20n%C3%A4chsten%20Eingabewerten%20vor%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%A2%3D%26gt%3B%20Vergiss%20nicht%20die%20Aufgabe%20so%20einfach%20wie%20m%C3%B6glich%20zu%20l%C3%B6sen%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%E2%80%A2%3D%26gt%3B%20Vergiss%20nicht%20nach%20jedem%20erfolgreichem%20Test%20(green)%20zu%20refactoren%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E',
                is_any_video    : false,                     
                is_done         : false,
                 
            },
            2:{
                title           : 'Summe n Zahlen berechnen',
                content         : 'Erlaube%20der%20Methode%20eine%20unbekannte%20Anzahl%20an%20Zahlen%20zu%20verarbeiten%0AErlaube%20der%20Methode%20das%20unterschiedliche%20Trenner%20(Delimiter)%20verarbeitet%20werden%0Af%C3%BCr%20%E2%80%9E1%3B2%E2%80%9E%20wird%203%20zur%C3%BCckgegeben%0Af%C3%BCr%20%E2%80%9E1%3B2%5C3%3B1%22%20wird%207%20zur%C3%BCckgegeben',
                is_any_video    : true,                     
                is_done         : false,
                 
            },
            3:{
                title           : 'Delimiter',
                content         : 'Erlaube%20der%20Methode%20dass%20die%20Zeichen%20f%C3%BCr%20neue%20Zeilen%20%60%5Cn%60%20wie%20ein%20Delimiter%20behandelt%20wird%0AZ.B.%20%601%5Cn2%2C3%60%20ergibt%206%0A',
                is_any_video    : false,                   
                is_done         : false,
                 
            },
            4:{
                title           : 'beliebige Delimiter',
                content         : 'Trenner%20(Delimiter)%20k%C3%B6nnen%20von%20jeglicher%20L%C3%A4nge%20(Anzahl%20der%20Delimiter)%20sein%0AF%C3%BCr%20%22%2F%2F***%5C1***2***3%5C2***2%E2%80%9E%20wird%2010%20zur%C3%BCckgegeben%0A',
                is_any_video    : false,                     
                is_done         : false,
                 
            }
        }
    }
}
