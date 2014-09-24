$(window).load(function(){
    browser_controller.init();
    kata_controller.init();
});




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
                 
            },
            5:{
                title           : 'Exceptions',
                content         : 'Aufruf%20der%20Methode%20mit%20negativen%20Nummern%20soll%20eine%20Klassenbasierte%20Ausnahme%20%E2%80%9CLCX_NEGATIVE_NUMBER%22%20geworfen%20werden%0A',
                is_any_video    : false,                     
                is_done         : false,
                 
            },
            6:{
                title           : 'max Nummber',
                content         : 'Zahlen%20gr%C3%B6%C3%9Fer%20wie%201000%20sollen%20ignoriert%20werden.%20%0AZ.B.%20(%601%3B1001%2C1%60)%20soll%20als%20Ergebnis%202%20liefern%0A',
                is_any_video    : false,                     
                is_done         : false,
                 
            }
        }
    },
    1:{
        title:'Noname',
        tasks:{
            0:{
                title           : 'noname',
                content         : 'no content',
                is_any_video    : false,                    
                is_done         : false, 
            }
        }
    }
}



// Load Kata, Observs Selectbox
var kata_controller = {
    count_katas:0,
    current_kata:0,
    init:function(){
        this.count_katas = Object.sizes(katas);
        $('#kata_selection').change(function(){
            var kata_nr = $(this).val();
            kata_controller.load_kata(kata_nr);
        });
        
    },
    load_kata:function(kata_nr){
        if(kata_nr<0 || kata_nr>Object.sizes(katas))
            kata_nr = 0;
        
        this.current_kata = kata_nr;
        task_controller.init();
        task_controller.load_task(0);
    }
}






//Load Taks of a Kata
var task_controller = {
    current_task_nr:0,
    count_tasks_of_kata:1,
    
    //Update nummber of tasks, current_task_nr
    init:function(){
        this.current_task_nr = 0;
        this.count_tasks_of_kata = Object.sizes(katas[kata_controller.current_kata].tasks);
        this.update_boxes();
    },
    
    //This function load a "task_nr" of current Kata
    load_task:function(task_nr){
         if(task_nr<0 || task_nr>Object.sizes(katas[kata_controller.current_kata].tasks)){
            task_nr = 0;
         }
        this.mark_task_as_doing();
        //Get all Informations of Task
        var task_title      = katas[kata_controller.current_kata].title + ' : ' + katas[kata_controller.current_kata].tasks[task_nr].title;
        var task_content    = decodeURIComponent(katas[kata_controller.current_kata].tasks[task_nr].content);
        var is_any_video    = katas[kata_controller.current_kata].tasks[task_nr].is_any_video;
        var video_url       = '';
        var img_url         = './videos/kata_videos/kata_' + kata_controller.current_kata + '/img/task_' + task_nr + '.png';
        $("#done").prop('checked', false);
        if(is_any_video)
            video_url = './videos/kata_videos/kata_' + kata_controller.current_kata + '/task_' + task_nr + '.mp4';
        
        
        //Append all Informations to Browser
        $('#task_title').empty().html(task_title);
        $('#task_content').empty().html(task_content);
        if(is_any_video){
            $('#video').empty().append('<video class="video-js vjs-default-skin" controls preload="none" width="100%" height="100%" poster="'+img_url+'" data-setup="{}"> <source src="'+video_url+'" type="video/mp4" /> </video>');
            $('.task_attachment_icons_wrapper .video_icon').addClass('active_icon');
        }
        else{
            $('#video').empty().append('<div class="no_video_indication">No Video!</div>');
            $('.task_attachment_icons_wrapper .video_icon').removeClass('active_icon');
        }
            
        
    },
    
    //Load a next task of current kata
    next_task:function(){
        var next_task = (this.current_task_nr + 1 )% this.count_tasks_of_kata;
        if($("#done").prop('checked')) this.mark_task_as_done();
        if(this.is_done()){
            this.current_task_nr = next_task;
            this.load_task(next_task);
            
        }else
           alert('Du musste den Task als erledigt markieren!');
    },
    prev_task:function(){
        var prev_task = (this.current_task_nr - 1 );
        if(prev_task  >=0){
            this.load_task(prev_task);
            this.current_task_nr = prev_task;
        }
        else{
            alert("Beim 1. Task angekommen!");
        }
       
            
            
        
    },
    
    //Update task_boxes on browser
    update_boxes:function(){
        $('.box').css('display', 'none');
        $('.box').removeClass('done');
        for(var i=0; i<this.count_tasks_of_kata; i++){
            $('.box').eq(i).css('display','block');
            if(katas[kata_controller.current_kata].tasks[i].is_done)
                $('.box').eq(i).addClass('done');    
        }
            
            
        
    },
    
    show_task_video:function(){
        $('.video_wrapper').css('display', 'block');
    },
    
    //Set task_status = "done"
    mark_task_as_done:function(){
        katas[kata_controller.current_kata].tasks[this.current_task_nr].is_done = true;
        $('.box').eq(this.current_task_nr).addClass('done');
    },
    //Set task_status = "doing"
    mark_task_as_doing:function(){
        if(!katas[kata_controller.current_kata].tasks[this.current_task_nr].is_done)
            $('.box').eq(this.current_task_nr).addClass('doing');
    },
    //return done_status of "current_task_nr"
    is_done:function(){
        return  katas[kata_controller.current_kata].tasks[this.current_task_nr].is_done;
    }
}






var browser_controller = {
    init:function(){
        var count_katas = Object.sizes(katas);
        for(var i = 0; i < count_katas; i++){
            $('#kata_selection').append('<option value="'+i+'">'+katas[i].title+'</option>');
        }
    }
}









var stopuhr = {
    hour:0,
    min:0,
    sec:0,
    timer:null,
    start:function(){
        this.run_timer();
    },
    stop:function(){
      clearTimeout(this.timer);  
    },
    
    updateLabel:function(){
        $('#stopuhr_anzeige').empty().append(this.addLeadingZeros(this.hour, 2) + ':' + this.addLeadingZeros(this.min, 2) + ':' + this.addLeadingZeros(this.sec, 2));
    },
    
    run_timer:function(){
        this.sec = (this.sec + 1 )% 60;
        if(this.sec == 0)
            this.min = this.min + 1 % 60;
        if (this.sec == 0 && this.min == 0) 
            this.hour ++;
            
        this.updateLabel();
        this.timer = setTimeout('stopuhr.run_timer()', 1000);
    },
    reset:function(){
        this.hour = 0;
        this.min  = 0;
        this.sec  = 0;
        this.updateLabel();
    },
    addLeadingZeros:function(number, length) {
        var num = '' + number;
        while (num.length < length) num = '0' + num;
        return num;
    }
}









//############### GLOBAL VARs and Funkttions ##########################

//Count elements of Objekt
Object.sizes = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
