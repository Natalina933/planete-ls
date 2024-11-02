import React from 'react';
import './styles/home.css';

function Home() {
    // eslint-disable-next-line no-unused-vars
    const feactures = [
        {
            title: 'Gestion de votre annonce',
            description: 'Créez et gérez facilement vos annonces de location avec Planète LS.'
        },
        {
            title: 'Suivi des réservations',
            description: 'Recevez des notifications instantanées pour suivre les réservations et les factures.'
        },
        {
            title: 'Service client dédié',
            description: 'Planète LS vous accompagne dans votre gestion de location saisonnière.'
        }
    ]
    return (
        <div className="home">

            <section className="hero">
                <h1>Gérez votre service de co-hôte avec simplicité</h1>
                <p>Rejoignez notre plateforme et optimisez la gestion de vos locations saisonnières.</p>
                <a href="/signup" className="cta-button">Commencer maintenant</a>
            </section>

            <section className="about">
                <h2>À propos de Planète LS</h2>
                <p>Planète LS vous met en relation avec des co-hôtes qualifiés pour gérer efficacement vos locations saisonnières.</p>
            </section>

            <section className="features">
                <h2>Pourquoi utiliser notre plateforme ?</h2>
                <ul>
                    <li>Gestion simplifiée de vos annonces</li>
                    <li>Suivi des réservations et calendrier intégré</li>
                    <li>Service client dédié et support 24/7</li>
                </ul>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Planète LS - Tous droits réservés</p>
                <nav className="footer-nav">
                    <a href="/privacy">Politique de confidentialité</a>
                    <a href="/terms">Conditions d’utilisation</a>
                </nav>
            </footer>
        </div>
    );
}

export default Home;
