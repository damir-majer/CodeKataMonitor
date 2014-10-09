//############### START AFTER LOADING##########################
$(window).load(function(){
    browser_controller.init();
    kata_controller.init();
    $('body').attr('unselectable','on').css('UserSelect','none').css('MozUserSelect','none');
});

//############### KATA CONTROLLER (LOAD) ##########################
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
//############### TASK-CONTROLLER (LOAD, NEXT, PREV, MARK-DONE, etc.) ##########################
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
        if(next_task == 0){
            alert('Herzlichen Glückwunsh!\nSie haben alle Tasks erledigt!\nLaden Sie eine neue Kata oder blättern Sie einfach zurück!');
            next_task = this.current_task_nr;
        }
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
//############### OPTIONS BUILDER ##########################
var browser_controller = {
    init:function(){
        var count_katas = Object.sizes(katas);
        for(var i = 0; i < count_katas; i++)
            $('#kata_selection').append('<option value="'+i+'">'+katas[i].title+'</option>');
    }
}
//############### STOPUHR ##########################
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
//############### FONT-SIZER ##########################
var font_sizer = {
    current_size:18,
    max:100,
    min:4,
    enlarge:function(){
        if(this.current_size != this.max){
            this.current_size += 2;
            $('.kataDescription_wraper .kataDescription').css('font-size', this.current_size);
        }
    },
    reduce:function(){
        if(this.current_size != this.min){
            this.current_size -= 2;
            $('.kataDescription_wraper .kataDescription').animate({fontSize:this.current_size});
        }
    }
}
//############### GLOBAL VARs and Funktions ##########################
//Count elements of Objekt
Object.sizes = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};