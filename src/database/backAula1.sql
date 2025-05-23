PGDMP  5                    }            hp    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16387    hp    DATABASE     h   CREATE DATABASE hp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE hp;
                     postgres    false            �            1259    16389    houses    TABLE     �   CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    founder character varying(100) NOT NULL
);
    DROP TABLE public.houses;
       public         heap r       postgres    false            �            1259    16388    houses_id_seq    SEQUENCE     �   CREATE SEQUENCE public.houses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.houses_id_seq;
       public               postgres    false    218                        0    0    houses_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.houses_id_seq OWNED BY public.houses.id;
          public               postgres    false    217            �            1259    16398    wizards    TABLE     �   CREATE TABLE public.wizards (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    house_id integer,
    photo text
);
    DROP TABLE public.wizards;
       public         heap r       postgres    false            �            1259    16397    wizards_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wizards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.wizards_id_seq;
       public               postgres    false    220                       0    0    wizards_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.wizards_id_seq OWNED BY public.wizards.id;
          public               postgres    false    219            \           2604    16392 	   houses id    DEFAULT     f   ALTER TABLE ONLY public.houses ALTER COLUMN id SET DEFAULT nextval('public.houses_id_seq'::regclass);
 8   ALTER TABLE public.houses ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            ]           2604    16401 
   wizards id    DEFAULT     h   ALTER TABLE ONLY public.wizards ALTER COLUMN id SET DEFAULT nextval('public.wizards_id_seq'::regclass);
 9   ALTER TABLE public.wizards ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            �          0    16389    houses 
   TABLE DATA           3   COPY public.houses (id, name, founder) FROM stdin;
    public               postgres    false    218   �       �          0    16398    wizards 
   TABLE DATA           <   COPY public.wizards (id, name, house_id, photo) FROM stdin;
    public               postgres    false    220                     0    0    houses_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.houses_id_seq', 5, true);
          public               postgres    false    217                       0    0    wizards_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.wizards_id_seq', 5, true);
          public               postgres    false    219            _           2606    16396    houses houses_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.houses DROP CONSTRAINT houses_name_key;
       public                 postgres    false    218            a           2606    16394    houses houses_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.houses DROP CONSTRAINT houses_pkey;
       public                 postgres    false    218            c           2606    16403    wizards wizards_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.wizards
    ADD CONSTRAINT wizards_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.wizards DROP CONSTRAINT wizards_pkey;
       public                 postgres    false    220            d           2606    16404    wizards wizards_house_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wizards
    ADD CONSTRAINT wizards_house_id_fkey FOREIGN KEY (house_id) REFERENCES public.houses(id) ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.wizards DROP CONSTRAINT wizards_house_id_fkey;
       public               postgres    false    4705    218    220            �   y   x�3���+N-��K�N�I�J,RΩ,� 	qs:���r8���S���R�s˹L9�K��2�
�9����LT��pr�e�e�ZT7 r�S�2�܋*Ӏ�)�E\1z\\\ s�,�      �   ^   x�3��)�KT��/KM��O�4���2��:�+'3Q��4�(/3�(��$n�	(V��/-NU00�4I�p:��e&�+�d���UA�1z\\\ EV     